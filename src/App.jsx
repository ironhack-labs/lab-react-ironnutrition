import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import { useState } from "react";
import React from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson)
  const addNewFood = (data) => {
    const updateFood = [...foods, data]

    setFoods(updateFood)
  }
  
  const deleteFood = (foodId) =>{
    const filter = foods.filter((data) =>{
       return data.id !== foodId
    })
    setFoods(filter)
  }
   

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood = {addNewFood}/>
      {foods.map((data)=>{
        return(
           <FoodBox 
            key = {data.id} 
            food = {data}
            clickToDelete = {deleteFood}
           />
        )
      })}
    </div>
  );
}

export default App;
