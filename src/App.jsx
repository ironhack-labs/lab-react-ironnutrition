import "./App.css";
import FoodBox from "./components/FoodBox";
import foodData from "./foods.json";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";

function App() {

const [foods, setFoods] = useState([]);

const addFood = (food) => {
  setFoods((prevFoods) => [...prevFoods, food]);
  foodData.push(food);
};

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />
      {foodData.map((food) => (
        <FoodBox key={food.id} food={food} />
      ))}
    </div>
  );
}

export default App;