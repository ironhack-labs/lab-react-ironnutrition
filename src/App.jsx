import "./App.css";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm.jsx";
import FoodBox from "./components/FoodBox.jsx";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleAddFood = newFood => {
    const updatedFood = [...foods, newFood];

    setFoods(updatedFood);
  }

  const handleDeleteFood = id => {
    const updatedFood = foods.filter(food => food.id !== id);
    setFoods(updatedFood);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm handleAddFood={handleAddFood} />
      { foods.map(food => {
        return <FoodBox key={food.id} id={food.id} name={food.name} calories={food.calories} image={food.image} servings={food.servings} onDelete={handleDeleteFood}/>
      })}
    </div>
  );
}

export default App;
