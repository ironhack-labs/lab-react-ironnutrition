import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";

function App() {

  const[foods, setFood] = useState (foodsJson);

  const deleteFood = foodId => {
    const filteredFood = foods.filter(food=>{
        return food.id !== foodId
    });

    setFood(filteredFood);
  }
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food, index)=>{
            return(<FoodBox key={index} food={food} delete = {deleteFood}/>)
        })
        }
    </div>
  )
} 

export default App;