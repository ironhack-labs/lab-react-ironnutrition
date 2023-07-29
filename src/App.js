import React, { useState } from 'react';
import foodsData from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';



function App() {  
  const [foods, setFoods] = useState(foodsData);

  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={addFood} className="add-food-form"/>
      <div className='foods-container'>
      {foods.map((food) => (
        <FoodBox key={food.name} food={food} className="food-box" />
      ))}
      </div>
    </div>
  );
}

export default App;
