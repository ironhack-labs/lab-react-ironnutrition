import React, { useState } from 'react';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  const removeFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  return (
    <div>
      <h1>Food List</h1>
      <AddFoodForm addFood={addFood} />
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} removeFood={removeFood} />
      ))}
    </div>
  );
}

export default App;