import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from '../src/components/FoodBox';

function App() {

  const [foods, setFoods] = useState(foodsJson);

  // Delete

  const onDeleteFood = (id) => {
    const newFoods = foods.filter(food => id !== food.id )

    setFoods(newFoods)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} onDeleteFood={() => {onDeleteFood(food.id)}}/>
      ))}
    </div>
  );
}

export default App;
