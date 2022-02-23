import React from 'react';
import './App.css';
import foodsArray from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';
import FoodSelection from './components/FoodSelection';
import { useState } from 'react';

function App() {
  
  const [displayForm, setDisplayForm] = useState(false);
  const [foods, setFoods] = useState(foodsArray);
  const [selectedFoods, setSelectedFoods] = useState([]);

  function toggleFormDisplay() {
    setDisplayForm(!displayForm);
  }

  function addFood(newFood) {
    setFoods([newFood, ...foods]);
  }
  
  function filterByName(subString) {
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

  // function updateFoodQuantity(foodName, value) {
  //   setFoods((prevFoods) => {
  //     prevFoods.forEach((food) => {
  //       if (food.name === foodName) food.quantity = value;
  //     })
  //   })
  //   console.log("foods: ", foods);
  // }

  function selectFood(newFood) {
    setSelectedFoods((prevSelection) => [...prevSelection, newFood])
  }

  return (
    <div className="App">
      
      <h1 className="title mt-5">IronNutrition</h1>

      <Search filterByName={ filterByName } />

      <hr />

      <button className="button is-info" onClick={ toggleFormDisplay }> { (displayForm ? 'Hide Form' : 'Add Food') } </button>

      { displayForm && (<AddForm addFood={ addFood } toggleFormDisplay = { toggleFormDisplay } />) }

      <hr />

      <div className="is-flex is-flex-direction-row mx-5">
        <div>
          { foods.map((food, index) => <FoodBox key={ index } food={ food } selectFood={ selectFood }/>) }
        </div>
        
        <div className="mx-5">
          <FoodSelection selectedFoods={ selectedFoods }/>
        </div>

      </div>

    </div>
  );
}

export default App;
