import React, { useState } from "react";
import "./App.css";

import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {

  const [foods, setFoods] = useState(foodsJson);

  const itemDelete = (name) => {
    console.log("Deleted item:", name); 
    const updatedFoods = foods.filter((food) => food.name !== name);
    console.log("Updated Food:", updatedFoods); 
    setFoods(updatedFoods);

  };

  return (

    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} onDelete={itemDelete} /> 
      ))}
    </div>

  );
}



export default App;
