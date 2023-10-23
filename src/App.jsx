import React, { useState } from "react"
import "./App.css";
import foodsJson from "./foods.json"
import FoodBox from "./components/FoodBox"

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const foodBoxes = foods.map((foodItem) => {
    return <FoodBox key={foodItem.name} food={foodItem} /> 
  })

  return (
     <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foodBoxes}
    </div>
  );
}

export default App;
