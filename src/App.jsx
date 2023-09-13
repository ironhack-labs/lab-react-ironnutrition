import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [food, setFood] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const newList = food.filter((e) => {
      return e.id !== foodId;
    });
    setFood(newList);
  };

  const addNewFood = (newFood) => {
    const newList = [newFood, ...food];
    setFood(newList);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />
      <FoodBox food={food} delete={deleteFood} />
    </div>
  );
}

export default App;
