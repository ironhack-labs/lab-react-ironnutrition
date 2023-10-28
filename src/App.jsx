import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const updatedFoods = foods.filter((food) => food.id != foodId);
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foods.map((food, index) => (
        <FoodBox key={index} food={food} onDelete={deleteFood} />
      ))}

    </div>
  );
}

export default App;
