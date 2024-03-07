import { useState } from "react";
import foodsJson from "./foods.json";
import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  let orangeIndex = foods.findIndex((element) => element.name === "Orange");

  console.log(orangeIndex);

  function DeleteItem(id) {
    const newFoods = foods.filter((element) => element.id !== id);
    setFoods(newFoods);
  }

  function AddFood(food) {
    let index = foods.findIndex((element) => element.name === food.name);

    let newId = index !== -1 ? index.id : uuidv4();

    food.id = newId;

    const newFoods = [...foods, food];
    setFoods(newFoods);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((element) => (
        <FoodBox key={element.id} food={element} DeleteItem={DeleteItem} />
      ))}
      <AddFoodForm AddFood={AddFood} />
    </div>
  );
}

export default App;
