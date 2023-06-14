import React from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import "./App.css";
import "./index.css";

function App() {
  const [foods, setFoods] = React.useState(foodsJson);
  return (
    <>
      {foods.map((food) => {
        return (
          <FoodBox
            key={food.id}
            id={food.id}
            name={food.name}
            calories={food.calories}
            image={food.image}
            servings={food.servings}
          />
        );
      })}
    </>
  );
}

export default App;
