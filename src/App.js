import React from 'react';
import './App.css';
import foodsArray from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';
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
  
  function filterByName(subString) {
    console.log('substring: ', subString);
    if (subString !== '') {
      setFoods((prevFoods) => {
        // this will only reduce selections, not 
        return prevFoods.filter(food => food.name.includes(subString))
      });
    } else {
      // this will not take into account added foods!
      setFoods(foodsArray);
    }
  }

  return (
    <div className="App">
      
      <h1 className="title mt-5">IronNutrition</h1>

      <Search filterByName={ filterByName } />

      <hr />

      <button className="button is-info" onClick={ toggleFormDisplay }> { (displayForm ? 'Hide Form' : 'Add Food') } </button>

      { displayForm && (<AddForm addFood={ addFood } toggleFormDisplay = { toggleFormDisplay } />) }

      <hr />

      { foods.map(food => <FoodBox food={ food } />) }
      

    </div>
  );
}

export default App;
