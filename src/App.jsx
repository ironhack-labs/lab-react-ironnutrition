import React, { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [foods, setFoods] = useState(foodsJson);
  
  
  
  const handleDelete = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };


  return (
    <div>
      {foods.map((food) => (
        <FoodBox key={food.name} food={food} deleteFunction = {handleDelete} />
      
      ))}
    </div>
  );
}

export default App;
