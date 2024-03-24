import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodList from "./components/FoodList";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  function handleDelete(id) {
    let newArr = foods.filter((oneFood) => id !== oneFood.id);
    setFoods(newArr);
  }

  function addFood(newFood) {
    setFoods([...foods, newFood]);
  }
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <FoodList addFood={addFood} handleDelete={handleDelete} foods={foods} />
    </div>
  );
}

export default App;
