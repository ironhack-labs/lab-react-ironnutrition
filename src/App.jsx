import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson.map((food) => food));
  const [displayFoods, setDisplayFoods] = useState(foods.map((food) => food));
  const [additionalFood, setAdditionalFood] = useState(
    displayFoods.map((food) => food)
  );

  const handleRemove = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setDisplayFoods(updatedFoods);
  };

  const createFood = (newFood) => {
    const newFoods = [newFood, ...displayFoods];
    setDisplayFoods(newFoods);
  };

  return (
    <div className="App">
      <AddFoodForm createFood={createFood} />
      <hr />
      {displayFoods.map((food, index) => {
        return (
          <FoodBox data={food} handleRemove={handleRemove} key={food.id} />
        );
      })}
    </div>
  );
}

export default App;
