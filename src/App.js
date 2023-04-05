import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import foodsFromJson from './foods.json';
import './App.css';

function App() {
  const [foodItems, setFoodItems] = useState(foodsFromJson);

  return (
    <div>
      {foodItems.map((food) => (
        <FoodBox
          key={food.name}
          food={{
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings,
          }}
        />
      ))}
    </div>
  );
}

export default App;
