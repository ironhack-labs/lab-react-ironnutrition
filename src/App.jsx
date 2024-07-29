import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from "react";


function App() {
  const [foods, setFoods] = useState(foodsJson);
  const handleAdd = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const handleDelete = (foodName) => {
    setFoods(foods.filter(food => food.name !== foodName));
  };

  return (
    <div className="App">

      <AddFoodForm onAdd={handleAdd} />
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} onDelete={handleDelete} />
      ))}


    </div>
  );
}

export default App;
