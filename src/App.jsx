import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foodsJson);
  const [name, setName] = useState("");

  
  
  return (
    <div>
      <h1>LAB | React IronNutrition</h1>

      {foodsJson.map((el) => {
        return <FoodBox food={el} key={el.id} />;
      })}
      
    </div>
  );
}

export default App;
