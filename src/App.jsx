import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFood] = useState(foodsJson);
  
  const deleteFood = (foodID) => {
  const newFoodList = foods.filter(function(foodItem){
      return foodItem.id != foodID
    })
    setFood(newFoodList)
  }
  return (
    <>
      <div className="App">
        <h1>LAB | React IronNutrition</h1>
      </div>

      {foods.map(function (foodItem) {
        return (
        <FoodBox
            name= {foodItem.name}
            calories= {foodItem.calories}
            image={foodItem.image}
            servings={foodItem.servings}
            id={foodItem.id}
            cbDeleteFood={deleteFood}
        />
        )
      })}
    </>
  );
}

export default App;
