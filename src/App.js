import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import foodsFromJson from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import './App.css';

function App() {
  const [foodItems, setFoodItems] = useState(foodsFromJson);

  const handleAddFood = (newFood) => {
    setFoodItems([newFood, ...foodItems]);
  };

  return (
    <div>
      <AddFoodForm onAddFood={handleAddFood} />
      <div className="wrap">
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
    </div>
  );
}

export default App;
