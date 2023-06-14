import "./App.css";
import { useState } from "react";
import foodList from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFood] = useState(foodList);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((el) => {
        return <FoodBox food={el} />;
      })}
    </div>
  );
}

export default App;
