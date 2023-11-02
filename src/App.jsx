import "./App.css";
import AddFood from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import FoodList from "./components/FoodList";
import foodsJson from "./foods.json";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <FoodList />
    </div>
  );
}

export default App;
