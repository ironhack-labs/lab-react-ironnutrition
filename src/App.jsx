import React, { useState } from 'react';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (indexToDelete) => {
    const updatedFoods = foods.filter((_, index) => index !== indexToDelete);
    setFoods(updatedFoods);
  };

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm onAddFood={addFood} />
      <div>
        {foods.map((food, index) => (
          <FoodBox key={index} food={food} onDelete={() => deleteFood(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
