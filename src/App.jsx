import "./App.css";
import foodsJson from "./foods.json";
import React, { useState } from "react";
//import FoodBox from "./components/FoodBox";
//import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };
  /* const deleteFood = (id) => {
  const updatedFoods = foods.filter((food) => food.id !== id);
   setFoods(updatedFoods);
  };*/

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodList />
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            <strong>Name:</strong> {food.name}, <strong>Image:</strong>{" "}
            {food.image}, <strong>Calories:</strong> {food.calories},{" "}
            <strong>Servings:</strong> {food.servings}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
