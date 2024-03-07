import { useState } from "react";
import foodsJson from "./foods.json";
import "./App.css";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  let orangeIndex = foods.findIndex((element) => element.name === "Orange");

  console.log(orangeIndex);

  function DeleteItem(id) {
    const newFoods = foods.filter((element) => element.id !== id);
    setFoods(newFoods);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((element) => (
        <FoodBox key={element.id} food={element} DeleteItem={DeleteItem} />
      ))}
    </div>
  );
}

export default App;
