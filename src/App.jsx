import { useState } from "react";
import "./App.css";
import foodJson from './foods.json';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodJson);

  const handleOnDelete = (id) => {
    const deleteFoods = foods.filter(food => food.id !== id)
    setFoods(deleteFoods)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm addFood={(newFood) => setFoods([...foods, newFood])} />

      {foods.map((food, index) => {
        return <FoodBox key={index} food={food} onDelete={handleOnDelete} />
      })}

    </div>
  );
}

export default App;
