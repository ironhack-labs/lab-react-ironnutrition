import React, { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import "./App.css";

function App() {

  const [foodItems, setFoodItems] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const updatedFoodItems = foodItems.filter((food) => food.id !== foodId);
    setFoodItems(updatedFoodItems);
  };

  const addFood = (newFood) => {
    newFood.id = foodItems.length + 1;
    const updatedFoodItems = [newFood, ...foodItems];

    setFoodItems(updatedFoodItems);
  };

  return (
    <div className="App">
      <h1>Add a new food</h1>
      <AddFoodForm callBackToAddFood={addFood} />
      <h1>Food List</h1>
      <FoodBox foodInfo={foodItems} callBackToDelete={deleteFood} />
    </div>
  );
}

export default App;

