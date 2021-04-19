import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './FoodBox';
import foods from './foods.json';

function App() {
  return (
    <div className="App">
  {foods.map((food) => {
    return (
      <FoodBox
        image = {food.image}
        name = {food.name}
        calories = {food.calories}
        quantity = {food.quantity}
      />
    )
  })}
      
      
    </div>
  );
}

export default App;
