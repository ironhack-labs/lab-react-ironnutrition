import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = foodId => {
    const filteredFoods = foods.filter(food => 
        foodId !== food.id)
        setFoods (filteredFoods)
}

const addNewFood = (food) => {
  const updatedFoods = [food, ...foods]
  setFoods(updatedFoods)
}

  return (
    <div className="App">
    <h1>Food list</h1>
            <AddFoodForm addNewFood={addNewFood} />
      {foods.map((aFood, index) => (
        <FoodBox 
        key={index} 
        food={aFood}
        deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;
