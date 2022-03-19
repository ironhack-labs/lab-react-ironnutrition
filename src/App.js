import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import { FoodBox } from './components/FoodBox';
import { useState } from 'react';
import { AddFood } from './components/AddFood';
import { FilterFood } from './components/FilterFood';
import { TodaysFood } from './components/TodaysFood';

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
    let filteredFood =
      str === 'All'
        ? filterFood
        : filterFood.filter(
            (food) => food.name[0].toLowerCase() === str.toLowerCase()
          );

    setFood(filteredFood);
  };

  return (
    <div className="App columns">
      <div className="column">
        <h1 style={{ fontSize: '6rem', marginLeft: '30px' }}>
          <strong>Iron</strong>Nutrition
        </h1>

        <AddFood addFood={addNewFood} />

        <FilterFood filterFood={filterFoodList} />

        {food.map((dish, index) => {
          return <FoodBox key={index} {...dish} />;
        })}
      </div>

      <TodaysFood />
    </div>
  );
}

export default App;
