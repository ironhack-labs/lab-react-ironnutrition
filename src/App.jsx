import { useState } from "react";
import foodsJson from "./foods.json";
import "./App.css";

import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm foods={foods} setFoods={setFoods} />
      {foods.map((food) => {
        return (
          <FoodBox
            key={food.id}
            food={food}
            foods={foods}
            setFoods={setFoods}
          />
        );
      })}
    </div>
  );
}

export default App;
