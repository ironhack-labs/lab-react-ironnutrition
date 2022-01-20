import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './foodbox/FoodBox';
import NewFood from './newfood/NewFood';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [openForm, setOpenForm] = useState(false);
  const [search, setSearch] = useState('');
  const [searchFoods, setSearchFoods] = useState([]);

  const handleForm = () => {
    console.log(openForm);
    setOpenForm(openForm ? false : true);
  };

  const addFood = (food) => {
    const foodList = [...allFoods];
    foodList.push(food);
    setAllFoods(foodList);
    setOpenForm(false);
  };

  const mapList = (list) => {
    const listReturn = list.map((food, index) => {
      const { name, calories, image, quantity } = food;
      return (
        <FoodBox
          key={index}
          name={name}
          calories={calories}
          image={image}
          quantity={quantity}
        />
      );
    });
    return listReturn;
  };

  useEffect(() => {
    const searchResults = allFoods.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(search);
    setSearchFoods(searchResults);
  }, [search, allFoods]);

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
      <input
        className="input mb-5"
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="columns">
        <div className="column">
          {searchFoods ? mapList(searchFoods) : mapList(allFoods)}
        </div>
        <div className="column">Test</div>
      </div>
    </section>
  );
}

export default App;
