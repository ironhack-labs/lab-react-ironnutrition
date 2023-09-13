import "./App.css";
import React, { useState } from "react";
import foodsJson from "./foods.json";

import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodName) => {
    const newList = foods.filter((element) => {
      return element.name !== foodName;
    });
    setFoods(newList);
  };

  const addNewFood = (newFood) => {
    const newList = [newFood, ...foods];
    setFoods(newList);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm callbackToAddFood={addNewFood} />
      <FoodBox food={foods} callbackToDelete={deleteFood} />
    </div>
  );
}

export default App;
