import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const[foods, setFoods] = useState(foodsJson)
  function deleteFood(foodId){
    const newFood = [...foods].filter(food=>foodId != food.id)
    setFoods(newFood)
    }
    function addFood(food){
      setFoods([...foods, food])
    }
  
  return (
    <div className="App">
      <AddFoodForm addFoodFunction = {addFood}  />
     {foods.map(food=>{
      return (<div key = {food.id}><FoodBox food = {food} deleteFoodFunction = {deleteFood} /></div>) 
     })}


    </div>
  );
}

export default App;
