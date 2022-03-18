import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import { FoodBox } from './components/FoodBox';
import { useState } from 'react';
import { AddFood } from './components/AddFood';
import { FilterFood } from './components/FilterFood';

function App() {
  const [food, setFood] = useState(foods);
  const [filterFood, setFilterFood] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    const updatedFilterFood = [...filterFood, newFood];

    setFood(updatedFood);
    setFilterFood(updatedFilterFood);
  };

  const filterFoodList = (str) => {
    let filteredFood;

    if (str === 'All') {
      filteredFood = filterFood;
    } else {
      filteredFood = filterFood.filter((food) => {
        return food.name[0].toLowerCase() === str.toLowerCase();
      });
    }

    setFood(filteredFood);
  };

  return (
    <div className="App">
      <h1>
        <strong>IronNutrition</strong>
      </h1>

      <AddFood addFood={addNewFood} />

      <FilterFood filterFood={filterFoodList} />

      {food.map((dish, index) => {
        return <FoodBox key={index} {...dish} />;
      })}
    </div>
  );
}

export default App;
