import "./App.css";
import { useState } from "react";
import foodsJSON from "./foods.json"
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {

const [foods, setFoods] = useState(foodsJSON);

const deleteFood = (foodId) => {
  // filtering all foods except the deleted one
  const filteredFoods = foods.filter((food) => {
    return food.id !== foodId;
  });
  // updating the State if function called/button clicked
  setFoods(filteredFoods);
};

const addNewFood = (newFood)=>{
  const updatedFoods = [...foods, newFood];
  setFoods(updatedFoods)
}

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood={addNewFood}/>
       {foodsJSON.map((food, index) =>{  // iterating through the foodsJSON, food is ea object and index it's index in the array
        return(<FoodBox key={index} food={food} theDelete={deleteFood}/>)  // implementing each result on a FoodBox component
})}
        
    </div>
  );
}

export default App;
