/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [food, setFood] = useState(foodsJson);
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm food={food} setFood={setFood}></AddFoodForm>
      <FoodBox food={food} setFood={setFood}></FoodBox>
    </div>
  );
}

export default App;
