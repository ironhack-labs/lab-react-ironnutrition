import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFood from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFoods = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });
    setFoods(filteredFoods);
  };

  //
  const newFood = (newFood) => {
    const foodUpdate = [...foods, newFood];
    setFoods(foodUpdate);
  };

  return (
    <div className="App">
      <h1> Food List</h1>
      <AddFood addNewFood={newFood} />
      {foods.map((food) => {
        return (
          <FoodBox key={food.id} food={food} clickToDelete={deleteFoods} />
        );
      })}
    
    </div>
  );
}
export default App;
