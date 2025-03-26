import "./App.css";
import "./index.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodName) => {
    const filteredFoods = foods.filter((food) => food.name !== foodName);
    setFoods(filteredFoods);
  };

  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm onAddFood={addFood} />

      {foods.map((foodItem) => (
        <FoodBox
          key={foodItem.name}
          food={foodItem}
          onDelete={deleteFood}
        />
      ))}
    </div>
  );
}

export default App;


