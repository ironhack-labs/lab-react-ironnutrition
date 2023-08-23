import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    })
    setFoods(filteredFoods)
  }

  const addNewFood = (newFood) => {
    const updatedFoods = [... foods, newFood];
    setFoods(updatedFoods);
  }

  return (
    <div className="App">
    <h1>Foods List</h1>
    <div className="FoodsList">
      {foods.map((food) =>{
        return <FoodBox key={food.id} food={food} clickToDelete={deleteFood}/>
      })}
    </div>
    <AddFood addNewFood={addNewFood} />
    </div>
  );
}

export default App;
