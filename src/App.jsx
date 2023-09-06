import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from '../src/components/FoodBox';

function App() {

  const [foods, setFoods] = useState(foodsJson)

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food) => (
        <FoodBox food={food}/>
      ))}
    </div>
  );
}

export default App;
