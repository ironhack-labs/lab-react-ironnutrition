import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const addFood = (food) => {
    setFoods([food, ...foods]);
  };

  const deleteFood = (foodName) => {
    setFoods(foods.filter((food) => food.name !== foodName));
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;




