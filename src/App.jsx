import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const removeFoodItem = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm AddFood={addFood} />
      {foods.map((food, index) => (
        <FoodBox
          key={index}
          food={food}
          onDelete={() => removeFoodItem(food.id)}
        />
      ))}
    </div>
  );
}
export default App;
