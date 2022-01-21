import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './foodbox/FoodBox';
import NewFood from './newfood/NewFood';
import TodayList from './todaylist/TodayList.js';
import Searchbar from './searchbar/Searchbar';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [openForm, setOpenForm] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [searchFoods, setSearchFoods] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleForm = () => {
    setOpenForm(openForm ? false : true);
  };

  const addFood = (food) => {
    setAllFoods([...allFoods, food]);
    setOpenForm(false);
  };

  const todayFood = (today) => {
    const foodList = [...selectedFoods];
    if (foodList.some((food) => food.name === today.name)) {
      const existingFood = foodList.find((food) => food.name === today.name);
      existingFood.quantity += today.quantity;
      existingFood.calories += today.calories;
    } else {
      foodList.push(today);
    }
    setTotalCalories(
      foodList.map((food) => food.calories).reduce((acc, num) => acc + num, 0)
    );
    setSelectedFoods(foodList);
  };

  const removeTodayFood = (today) => {
    const foodList = selectedFoods.filter((food) => food.name !== today.name);
    setTotalCalories(
      foodList.map((food) => food.calories).reduce((acc, num) => acc + num, 0)
    );
    setSelectedFoods(foodList);
  };

  useEffect(() => {
    const searchResults = allFoods.filter((food) =>
      food.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setSearchFoods(searchResults);
  }, [searchName, allFoods]);

  return (
    <section className="container px-3 py-5">
      <h1 className="title">IronNutrition</h1>
      <div className="pb-5">
        {openForm ? (
          <NewFood newFood={addFood} />
        ) : (
          <button className="button is-primary" onClick={() => handleForm()}>
            New food
          </button>
        )}
      </div>
      <Searchbar setSearchName={setSearchName} />
      <div className="columns">
        <div className="column">
          {searchFoods.map((food, index) => {
            const { name, calories, image, quantity } = food;
            return (
              <FoodBox
                key={index}
                name={name}
                calories={calories}
                image={image}
                quantity={quantity}
                todayFood={todayFood}
              />
            );
          })}
        </div>
        <div className="column">
          <h2 className="subtitle">Today's foods</h2>
          {selectedFoods.length > 0 ? (
            selectedFoods.map((food, index) => {
              const { name, calories, quantity } = food;
              return (
                <TodayList
                  key={index}
                  name={name}
                  calories={calories}
                  quantity={quantity}
                  removeTodayFood={removeTodayFood}
                />
              );
            })
          ) : (
            <p>Add your meals to see your daily calories</p>
          )}
          {totalCalories > 0 && (
            <div className="block">
              <span
                class="tag is-primary is-light is-medium"
                style={{ gap: 4 }}
              >
                Total: <b>{totalCalories}</b> cal
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
