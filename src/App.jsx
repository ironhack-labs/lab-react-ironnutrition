import { useState } from "react";
import "./App.css";

import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const onDeleteFood = (food) => {
    const foodsWithoutFood = foods.filter((f) => f.id !== food.id);
    setFoods(foodsWithoutFood);
  };

  const onAddFood = (food) => {
    setFoods([food, ...foods]);
  };

  const foodBoxes = foods.map((food) => (
    <FoodBox key={food.id} food={food} onDeleteFood={onDeleteFood} />
  ));

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm onAddFood={onAddFood} />

      {foodBoxes}
    </div>
  );
}

export default App;
