import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFoodItem = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const handleAddFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={handleAddFood} />
      {foodsJson.map((food) => (
        <FoodBox key={food.id} food={food} />
      ))}
    </div>
  );
}

export default App;
