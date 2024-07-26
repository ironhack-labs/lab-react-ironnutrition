import "./App.css";
import foodsJson from "./foods.json";
import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm onAdd={addFood} />
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={deleteFood} />
      ))}
    </div>
  );
}

export default App;
