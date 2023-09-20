import "./App.css";
import foodData from "../src/foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";

function App() {
  const [foods, setFoods] = useState(foodData);

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });

    setFoods(filteredFoods);
  };

  return (
    <div className="App">
      <FoodList />
    </div>
  );
}

export default App;
