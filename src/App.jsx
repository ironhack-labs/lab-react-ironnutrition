import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFood] = useState(foodsJson);

  const deleteFood = (foodID) => {
    const newFoodList = foods.filter(function (foodItem) {
      return foodItem.id != foodID;
    });
    setFood(newFoodList);
  };

  const addNewFood = (newFood) => {
    const newList = [newFood, ...foods];
    setFood(newList);
  };
  return (
    <>
      <div className="App">
        <h1>LAB | React IronNutrition</h1>
      </div>
      <AddFoodForm cbAddFood={addNewFood} />
      {foods.map(function (foodItem) {
        return (
          <FoodBox
            name={foodItem.name}
            calories={foodItem.calories}
            image={foodItem.image}
            servings={foodItem.servings}
            id={foodItem.id}
            cbDeleteFood={deleteFood}
          />
        );
      })}
    </>
  );
}

export default App;
