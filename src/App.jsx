import React, { useState } from "react";

import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

import "./App.css";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDelete = (foodName) => {
    const updatedFoods = foods.filter((food) => food.name !== foodName);
    setFoods(updatedFoods);
  };

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={handleAddFood} />
      <h1>Food List</h1>
      <div className="food-list">
        {foods.map((food, index) => (
          <FoodBox key={index} food={food} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
