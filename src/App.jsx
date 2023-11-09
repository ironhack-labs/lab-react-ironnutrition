import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json"
import { useState } from "react";


function App() {
const [foodList, setFoodList]= useState(foodsJson)

const copyFoodList = [...foodList]
console.log(copyFoodList)

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {/* <FoodBox food={foodList} /> */}
      <FoodBox food={foodList} />
    </div>
  );
}

export default App;
