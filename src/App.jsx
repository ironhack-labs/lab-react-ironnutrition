import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";

import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodsArray, setFoodsArray] = useState(foodsJson);

  const addFood = (newFood) => {
    setFoodsArray([newFood, ...foodsArray]);
  };

  const deleteFood = (id) => {
    const updatedFoods = foodsArray.filter(food => food.id !== id);
    setFoodsArray(updatedFoods);
  };

  return (
    <div>
      <h1>Food List</h1>
      <AddFoodForm onAddFood={addFood} />
      {foodsArray.map(food => (
        <FoodBox key={food.id} food={food} onDelete={deleteFood} />
      ))}
    </div>
  );
}

export default App;
