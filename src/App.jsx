import { useState } from "react";
import "./App.css";
import foodsJson from './foods.json'
import FoodList from "./components/FoodList";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const addNewFood = (newFood)=>{
    const updatedFood = [...foods, newFood];
    setFoods(updatedFood);
  }
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodList/>
    </div>
  );
}

export default App;
