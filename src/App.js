import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox/FoodBox'

function App() {
  return (
    <div className="App">
    <h1>IronNutrition</h1>

    {foods.map(foodItem => (
      <FoodBox
      name = {foodItem.name}
      image = {foodItem.image}
      calories = {foodItem.calories}
       />
    ))}
    </div>
  );
}

export default App;
