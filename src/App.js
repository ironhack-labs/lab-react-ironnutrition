import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/addNewFood';

function App() {
  const [foods, setFoods] = useState(foodsArr);

  const addNewFood = newFood => {
    setFoods(prevFood => {
      return [...prevFood, newFood]
    })
  }

  return (
    <div className="App">
      <AddNewFood addFood={addNewFood}/>
      <FoodBox listOfFoods={foods}/>
    </div>
  );
}

export default App;
