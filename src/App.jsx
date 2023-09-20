import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDelete = (id) => {
    const updatedFoods = foods.filter((element) => element.id !== id);
    setFoods(updatedFoods);
  };

  const addNewFood = (newFood) => {
    const updatedNewFood = [...foods, newFood];
    setFoods(updatedNewFood);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFood addFood={addNewFood} />
      {foods.map((food) => {
        return (
          <FoodBox key={food.id} food={food} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

export default App;
