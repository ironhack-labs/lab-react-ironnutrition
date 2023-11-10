import "./App.css";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDelete = (foodId) => {
    const newArr = foods.filter((foodId) => {
      return foods.id !== foodId;
    });
    setFoods(newArr);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foodsJson.map((food, index) => {
        return <FoodBox food={food} key={index} handleDelete={handleDelete} />;
      })}
    </div>
  );
}

export default App;
