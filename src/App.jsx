import "./App.css";
import { useState } from "react";
import foodList from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

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
  
  function addFood(obj) {
    const foodsCopy = foods.slice();
    foodsCopy.push({
      id: Math.random() * 1000000000000,
      name: obj.name,
      image: obj.image,
      calories: obj.calories,
      servings: obj.servings,
    });
    setFood(foodsCopy);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addTheFood={addFood} />
      {foods.map((el) => {
        return <FoodBox food={el} deleteTheFood={deleteFood} />;
      })}
    </div>
  );
}

export default App;
