import foodsJson from "./foods.json";
import "./App.css";
import { useState } from "react";
import FoodBox from "./components/foodBox/FoodBox";
import AddFoodForm from "./components/addFoodForm/AddFoodForm";
import Foodlist from "./components/foodlist/FoodList";



function App() {
  

  return (
    <>
      <div className="App">
        <h1>LAB | React IronNutrition</h1>
      </div>
     <Foodlist/>
    </>

  );
}

export default App;
