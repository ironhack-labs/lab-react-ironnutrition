import "./App.css";
import foodsJson from "./foods.json";
import React from "react"
import { useState } from "react"
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"

function App() {
  const [foodsList, setFoodList] = useState(foodsJson)

  const handleAddFood = (newFood) => {
    setFoodList([...foodsList, newFood])}

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm onAddFood={handleAddFood} />

<h2>Food List</h2>

{foodsList.map((food) => (
  <FoodBox key={food.id} food={food} />


))}

    </div>
  );
}

export default App;
