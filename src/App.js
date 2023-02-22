import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox.js'
import AddFoodForm from './components/AddFoodForm';
import './App.css';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  }

  return (
    <div className="App"> 
      <h1>Food List</h1>
      <AddFoodForm addFood={addFood} />
      {foodList.map((food) => (
        <div key={food.id}>
          <FoodBox key={food.id} food={food} />
        </div>
      ))}
    </div>
  );
}

export default App;