import "./App.css";
import foodsJson from "./foods.json";
import {useState} from "react";
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson)

  const removeFood = (id) => {
    const updatedFoodList = foods.filter((food) => food.id !== id);
    setFoods(updatedFoodList);
  }

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <AddFoodForm />
      {foods.map((food, index) => (
        <FoodBox kex={index} food={food} removeFood={removeFood} />
      ))}
    </div>
  );
}

export default App;
