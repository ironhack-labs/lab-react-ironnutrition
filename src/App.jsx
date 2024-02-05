import React, { useState } from "react";
import foodsData from "./foods.json";
import FoodBox from "./components/FoodBox";

import "./App.css";

function App() {
  const [foods, setFoods] = useState(foodsData);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <h2 className="food-list">Food List</h2>

      <div className="row">
        {foods.map((food, index) => (
          <FoodBox key={index} food={food} />
        ))}
      </div>
    </div>
  );
}

export default App;
