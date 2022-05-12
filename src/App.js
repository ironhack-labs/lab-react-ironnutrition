import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/addNewFood';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsArr);

  const addNewFood = newFood => {
    setFoods(prevFood => {
      return [...prevFood, newFood]
    })
  }

  return (
    <div className="App">
      <br></br>
      <span>Search Food</span>
      <Search food={foodsArr} setFoods={setFoods} />
      <hr></hr>
      <AddNewFood addFood={addNewFood}/>
      <hr></hr>
      <FoodBox listOfFoods={foods}/>
    </div>
  );
}

export default App;
