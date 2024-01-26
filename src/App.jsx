import { useState } from "react";
import "./App.css";
import foodsjson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsjson);
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm foods={foods} setFoods={setFoods}></AddFoodForm>
      {foods.map((eachFood)=>{
        return ( <FoodBox key={eachFood.id} food={eachFood} foods={foods} setFoods={setFoods}></FoodBox>)
      
      })}
    </div>
  );
}

export default App;
