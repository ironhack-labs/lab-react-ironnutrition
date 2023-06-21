// src/App.js
import { useState } from 'react';
import './App.css';
import foodsDetails from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsDetails);

  const handleAddFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  const deleteFood = (foodName) => {
    const newList = foods.filter((element) => {
      return element.name !== foodName;
    });

    setFoods(newList);
  };

  return (
    <div className="App">
      <h1>Foodlist</h1>
      <AddFoodForm onAddFood={handleAddFood} />
      <div className="card">
        {foods.map((food, index) => (
          <FoodBox key={index} {...food} callbackToDelete={deleteFood} />
        ))}
      </div>
    </div>
  );
}
export default App;
