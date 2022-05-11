import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchFood from './components/Search';

function App() {
  const [foodsList, setFoodsList] = useState(foodsArr);

  function displayFoods() {
    setFoodsList(foodsList);
  }

  function addFood(newFood) {
    setFoodsList((prevFood) => {
      return [newFood, ...prevFood];
    });
  }

  function searchFood(foodToSearch) {
    setFoodsList((prevFood) => {
      const newFoodList =
        foodToSearch === ''
          ? foodsList
          : [...prevFood].filter((food) =>
              food.name.toLowerCase().includes(foodToSearch)
            );
      return newFoodList;
    });
  }

  return (
    <div className="App">
      <AddFood callbackCreateFood={addFood} />
      <SearchFood searchBtn={searchFood} />
      <FoodBox foods={foodsList} callbackDisplayFoods={displayFoods} />
    </div>
  );
}

export default App;
