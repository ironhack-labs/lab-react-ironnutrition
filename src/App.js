// src/App.js
import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { FoodBox } from './components/FoodBox';

function App() {
  const [food, setFood] = useState(foods);
  return (
    <div>
      {food.map((elm) => {
        return (
       
            <FoodBox food={elm} />
          
        );
      })}
    </div>
  );
}

export default App;
