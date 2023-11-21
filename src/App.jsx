import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import React, { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";


function App() {
  const [foods, setFoods] = useState(foodsJson);
  const simulatedFood = {
    name: "Orange",
    calories: 85,
    image: "https://i.imgur.com/abKGOcv.jpg",
    servings: 1
  };

  const handleDeleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };
  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm onAddFood={handleAddFood} />
      <FoodBox food={simulatedFood} />
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} onDelete={handleDeleteFood} />
      ))}
    </div>
  );
}

export default App;