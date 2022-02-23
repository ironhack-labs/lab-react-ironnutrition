import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [filteredFood, setFilteredFood] = useState(foods);
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [todayFood, setTodayFood] = useState([]);

  const createFood = (foodDetails) => {
    setFood([foodDetails, ...food]);
  };

  const displayFoundFoods = (e) => {
    const hasValue = !!e.target.value;
    if (hasValue) {
      setFilterEnabled(true);
      setFilteredFood(
        food.filter((food) =>
          food.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setFilterEnabled(false);
      setFilteredFood(food);
    }
  };

  const addToTodayFoods = (foodItem) => {
    setTodayFood((prevState) => [...prevState, foodItem]);
  };

  const handleDelete = (name) => {
    setTodayFood((prevState) => prevState.filter((food) => food.name !== name));
    setFood((prevState) => prevState.filter((food) => food.name !== name));
  };

  const totalCalories = () => {
    let totalCalories = 0;
    todayFood.length > 0 &&
      todayFood.forEach((foodItem) => {
        totalCalories += foodItem.calories;
      });
    return totalCalories;
  };

  console.log(totalCalories);

  const isFilterEnabled = filterEnabled ? filteredFood : food;
  return (
    <div className="App">
      <AddFood createFood={createFood} />
      <Search displayFoundFoods={displayFoundFoods} />
      <div className="Food-display">
        <div className="columns">
          <div className="column">
            {isFilterEnabled.map((food, index) => {
              return (
                <FoodBox
                  key={index}
                  food={food}
                  onAdd={addToTodayFoods}
                  onDelete={handleDelete}
                />
              );
            })}
          </div>
          <div className="column">
            <h1>Today's Foods</h1>
            <hr />
            <ul>
              {todayFood.map((food, index) => {
                return (
                  <li key={index}>
                    <span>{food.quantity} - </span>
                    <span>{food.name}</span>
                    <br />
                    <span>{food.calories * food.quantity} calories</span>
                  </li>
                );
              })}
            </ul>
            <div>Total Calories: {totalCalories()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
