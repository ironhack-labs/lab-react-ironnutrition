import React, { useState } from "react"
import "./App.css";
import foodsJson from "./foods.json"
import FoodBox from "./components/FoodBox"

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDelete = (foodName) => {
    const updatedFoods = foods.filter(food => food.name !== foodName);
    setFoods(updatedFoods);
  };

  const foodBoxes = foods.map((foodItem) => (
    <FoodBox key={foodItem.name} food={foodItem} onDelete={handleDelete} />
  ));

  return (
     <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foodBoxes}
    </div>
  );
}

export default App;
