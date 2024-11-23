import React, { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  // Agregar un nuevo alimento
  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  // Eliminar un alimento
  const deleteFood = (foodName) => {
    const updatedFoods = foods.filter((food) => food.name !== foodName);
    setFoods(updatedFoods);
  };

  // Actualizar servings de un alimento
  const updateFoodServings = (foodName, newServings) => {
    const updatedFoods = foods.map((food) =>
      food.name === foodName ? { ...food, servings: newServings } : food
    );
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <AddFoodForm onAddFood={addFood} />
      {foods.map((food) => (
        <FoodBox
          key={food.name}
          food={food}
          onDeleteFood={deleteFood}
          onUpdateFood={updateFoodServings}
        />
      ))}
    </div>
  );
}

export default App;
