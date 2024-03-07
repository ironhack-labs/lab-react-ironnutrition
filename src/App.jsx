import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";

const [foods, setFoods] = useState(JSON.parse(foodsJson));

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
    </div>
  );
}

export default App;
