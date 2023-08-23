import './App.css';
import { useState } from 'react';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foodsJson);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    setFood(updatedFood);
  };

  const deleteFood = (foodId) => {
    const foodsCopy = [...food];
    food.forEach((food, index) => {
      if (food.id === foodId) {
        foodsCopy.splice(index, 1);
      }
    });
    setFood(foodsCopy);
  };

  return (
    <div className="App">
      <h2>Foods List</h2>
      {food.map((food) => {
        return (
          <FoodBox key={food._id} food={food} clickToDelete={deleteFood} />
        );
      })}
      <AddFoodForm addNewFood={addNewFood} />
    </div>
  );
}

export default App;
