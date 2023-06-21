// src/App.js
import { useEffect, useState } from 'react';
import './App.css';
import foodsDetails from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(foodsDetails);
  }, []);

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <h1>Foodlist</h1>
      <AddFoodForm onAddFood={handleAddFood} />
      <div className="FoodBoxCard">
        {foods.map((food, index) => (
          <FoodBox key={index} {...food} />
        ))}
      </div>
    </div>
  );
}
export default App;
