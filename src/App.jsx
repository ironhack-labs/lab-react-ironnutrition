import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [food, setFood] = useState(foodsJson);
  const deleteFood = (foodTitle) => {
    const newList = food.filter((foodDetails) => {
      return foodDetails.id !== foodTitle;
    });
    setFood(newList);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {food.map((currentFood) => (
          <FoodBox
            name={currentFood.name}
            calories={currentFood.calories}
            servings={currentFood.servings}
            image={currentFood.image}
            food={setFood}
            removingFood={deleteFood}
          />
        ))}
        <FoodBox />
      </div>
    </div>
  );
}

export default App;
