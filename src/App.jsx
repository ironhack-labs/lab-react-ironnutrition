import React, { useState } from "react";
import foodJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodJson);

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const handleDelete = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={handleAddFood} />
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
