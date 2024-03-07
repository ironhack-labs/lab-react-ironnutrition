import { useState } from "react";
import foodsJson from "./foods.json";
import "./App.css";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  let orangeIndex = foods.findIndex((element) => element.name === "Orange");

  console.log(orangeIndex)

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodBox food={foods[14]} />
    </div>
  );
}

export default App;
