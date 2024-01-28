import React, { useState, useEffect } from "react";
import foodsData from './foods.json';
import FoodBox from "./components/FoodBox";

import "./App.css";

function App() {
const [foods, setFoods] = useState([]);

useEffect(() => {

  setFoods(foodsData);
}, []);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <h2 className="food-list">Food List</h2>
      
        <div className="row">

        <FoodBox food={ {
            name: "Orange",
            calories: 85,
            image: "https://i.imgur.com/abKGOcv.jpg",
            servings: 1
          } } />
       
        </div>
    </div>
    
  );
}

export default App;
