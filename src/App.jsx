import { useState } from "react";
import "./App.css";
import foodsjson from './foods.json'
import FoodBox from "./components/FoodBox";

function App() {
  const [foods,setFoods] = useState(foodsjson)
  return (
    <div className="App">
      <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 2
} } 
/>
      <h1>LAB | React IronNutrition</h1>
    </div>
  );
}

export default App;
