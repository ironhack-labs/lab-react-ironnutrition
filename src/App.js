import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import { FoodBox } from './components/FoodBox';
import { useState } from 'react';
import { AddFood } from './components/AddFood';

function App() {
  const [food, setFood] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];

    setFood(updatedFood);
  };

  return (
    <div className="App">
      <h1>
        <strong>IronNutrition</strong>
      </h1>

      <AddFood addFood={addNewFood} />

      {food.map((dish, index) => {
        return <FoodBox key={index} {...dish} />;
      })}
    </div>
  );
}

export default App;
