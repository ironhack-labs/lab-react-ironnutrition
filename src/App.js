import './App.css';
import foods from './foods.json';
import React, { Component } from 'react';
import { useState } from "react";
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';


function App() {

  const [foodsArr, setFood] = useState(foods);

  return (
    <div className="App">
      {/* i am the Minion Bob and like {foods[0].name} and Banana */}
      <AddFoodForm setFood={setFood} />
      <h1>Food List</h1>
      <FoodBox foodsArr={foodsArr}/>
    </div>
  );
}

export default App;
