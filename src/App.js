import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox.js';
import AddFoodForm from './components/AddFoodForm';
import './App.css';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <button onClick={toggleForm}>{showForm ? 'Hide Form' : 'Add New Food'}</button>
      {showForm && <AddFoodForm addFood={addFood} />}
      {foodList.map((food) => (
        <div key={food.id}>
          <FoodBox key={food.id} food={food} />
        </div>
      ))}
    </div>
  );
}

export default App;