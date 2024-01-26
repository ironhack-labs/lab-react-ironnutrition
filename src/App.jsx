import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [food,setFood] = useState(foodsJson)

  function deleteFood(id){
    const updatedFood = food.filter((oneFood)=>oneFood.id!==id)
    setFood(updatedFood)
  }

 
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm food={food} setFood={setFood} />
      <FoodBox  food={food} setFood={setFood} deleteFood={deleteFood}/>
    </div>
  );
}

export default App;
