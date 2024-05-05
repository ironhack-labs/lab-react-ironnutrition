import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const handleDelete = (id) => {
    const updateFoods = foods.filter(food => food.id !== id);
    setFoods(updateFoods);
  }

  return (
    <div className="App">
      {foods.map((food) => {
        return <FoodBox key={food.id} foodDetails={food} onDelete={handleDelete} />;
      })}
    </div>
  );
}

export default App;
