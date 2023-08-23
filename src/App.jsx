import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBoox from "./components/FoodBox";
import AddNewFood from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFoods = (foodsId) => {
    const filteredFood = foods.filter((food) => {
      return food.id !== foodsId;
    });
    setFoods(filteredFood);
  }

  const addNewFood = (newFood) => {
        const updatedFoods = [...foods, newFood];

        setFoods(updatedFoods);
    }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foodsJson.map((onlyfood) =>{
        return(<FoodBoox key={onlyfood.id} onlyFood={onlyfood} deleteBtn={deleteFoods} />)
      })}
      <AddNewFood addNewFood={addNewFood}/>
    </div>
  );
}

export default App;
