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
          <div>
            <p>{elm.name}</p>
            <img src={elm.image} alt="img" width={100} />
            <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
