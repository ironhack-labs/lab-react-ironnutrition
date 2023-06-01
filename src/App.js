import React, { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsData);

  return (
    <div className="App">
      <div className='input'>
        <AddFoodForm />
      </div>
      <div className="food-box-container">
      {foods.map((food, index) => (
        <div key={index}>
          <FoodBox food={food} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
