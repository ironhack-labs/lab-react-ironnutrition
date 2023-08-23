import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import FoodList from "./components/FoodList";



function App() {

  return (
    <div className="App">
      <FoodList/>
    </div>
  );
}

export default App;