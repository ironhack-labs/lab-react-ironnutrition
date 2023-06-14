import "./App.css";
import { useState } from "react";
import foodList from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFood] = useState(foodList);

  function deleteFood(id) {
    const foodsCopy = foods.slice();

    const foodIndex = foods.findIndex(function (el) {
      return el.id === id;
    });

    foodsCopy.splice(foodIndex, 1);

    setFood(foodsCopy);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((el) => {
        return <FoodBox food={el} deleteTheFood={deleteFood} />;
      })}
    </div>
  );
}

export default App;
