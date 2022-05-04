import React from 'react';
import { useState } from "react";
import 'bulma/css/bulma.css';
import './App.css';
import foodDataJSON from './foods.json';

import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import SearchBox from './components/SearchBox'

function App() {
  const [ foodData,setFoodData ] = useState(foodDataJSON);
  const [ foods,setFoods       ] = useState(foodDataJSON);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodData, newFood];

    setFoodData(updatedFoods);
    setFoodData(updatedFoods);
  }  

  const searchFoodList = (q) => {
    const newFoodList = (q === '' ? foods : foodData.filter(f=>f.name.toLowerCase().includes(q)))
    setFoods(newFoodList);
  }

  return (
    <div className="app">
      <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title">IronNutrition</h1>
        </div>
        <div className="column">
          <AddFood addFood={addNewFood}/>
        </div>
      </div>
        <div>
          <SearchBox foodSearch={searchFoodList}/>
        </div>
        <div className="columns">
          <div className="column">
            {foods.map((food,index)=><FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} key={index}/>)}
          </div>
          <div className="column">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
