import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState([...foodsJson]);

  const handleSubmit = (event, foodForm) => {
    event.preventDefault();
    setFoods([...foods, foodForm]);
  };

  const handleDeleteFood = (idDelete) => {
    const foodsData = foods.filter((food) => {
      return food.id !== idDelete;
    });
    setFoods(foodsData);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm handleSubmit={handleSubmit} />
      {foods.map((food) => {
        return (
          <FoodBox food={food} handleDelete={handleDeleteFood} key={food.id} />
        );
      })}
    </div>
  );
}

export default App;
