// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [food, setFood] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood]

    setFood(updatedFood)
  }


  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm addNewFood={addNewFood}/>
      <div className="container">
        {food.map((item) => {
          return <FoodBox food={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
