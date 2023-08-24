
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFoods = (foodId) => {
    const foodsCopy = [...foods];

    foods.forEach((food, index) => {
      if (food.id === foodId) {
        foodsCopy.splice(index, 1);
      }
    });

    setFoods(foodsCopy);
  };

  const addNewFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={addNewFood} />
      {foods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          clickToDelete={deleteFoods}
        />
      ))}
    </div>
  );
}

export default App;