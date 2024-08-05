import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodIdToDelete) => {
    const filteredFoods = foods.filter((elm) => {
      return elm.id !== foodIdToDelete;
    });

    setFoods(filteredFoods);
  };

  const addNewFood = (newFood) => {
    const foodsJsonCopy = [...foodsJson];
    foodsJsonCopy.unshift(newFood);
    setFoods(foodsJsonCopy);
  };

  return (
    <div className="App">
      <header>
        <div className="logo-container">
          <img
            className="logo react"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
          />
          <img
            className="logo nutrition"
            src="https://img.icons8.com/ios/452/healthy-food.png"
            alt="Nutrition Logo"
          />
        </div>
        <h1>
          React IronNutrition{" "}
          <span role="img" aria-label="Salad Emoji">
            🥗
          </span>
        </h1>
      </header>

      <AddFoodForm addNewFood={addNewFood} />

      <div className="food-container">
        {foods.map((elm) => (
          <FoodBox key={elm.id} foodInfo={elm} deleteFood={deleteFood} />
        ))}
      </div>
    </div>
  );
}

export default App;