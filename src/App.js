import React from 'react';
import './App.css';
import foodsArray from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import { useState } from 'react';

function App() {
  
  const [displayForm, setDisplayForm] = useState(false);
  const [foods, setFoods] = useState(foodsArray);

  function toggleFormDisplay() {
    setDisplayForm(!displayForm);
  }

  function addFood(newFood) {
    setFoods([newFood, ...foods]);
  } 

  return (
    <div className="App">
      
      <button className="button is-info m-2" onClick={ toggleFormDisplay }> { (displayForm ? 'Hide Form' : 'Add Food') } </button>

      { displayForm && (<AddForm addFood={ addFood } toggleFormDisplay = { toggleFormDisplay } />) }

      <hr />
      
      { foods.map(food => <FoodBox food={ food } />) }
      

    </div>
  );
}

export default App;
