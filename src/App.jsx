import { useState } from "react";
import "./App.css";
import foodsJSON from "./foods.json"
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
function App() {

  const [foods, setFoods] = useState(foodsJSON)
  
  function deleteFood(foodId){
    const newlist = [...foods].filter((oneFood)=>{
      return oneFood.id != foodId
    })
    setFoods(newlist)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm setFoods={setFoods} foods={foods}/>

      {foods.map((oneFood)=>{
        return <FoodBox key={oneFood.id} food={
          {
            id: oneFood.id,
            name: oneFood.name,
            calories: oneFood.calories,
            image: oneFood.image,
            servings: oneFood.servings,
          }}  
          deleteFood={()=>deleteFood(oneFood.id)}/>
      })}
      
      </div>
  );
}

export default App;
