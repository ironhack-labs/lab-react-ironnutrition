import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";


function App() {
  const [foods, setFoods]= useState(foodsJson)
  const deleteFood = foodId => {
    const filteredFood = foods.filter(food=>{
      return food.id !== foodId
    })

    setFoods(filteredFood)
  }

  const addNewFood = (newFood) => {
    const newListOfFoods = [...foods, newFood]
    setFoods(newListOfFoods)

}
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood={addNewFood}/>
      {foods.map((food, index)=>(
        <FoodBox food={food} key={index} delete={deleteFood} />
      ))}

    </div>
    
  );
}

export default App;
