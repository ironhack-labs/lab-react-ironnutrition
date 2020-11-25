import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import './App.css';
import Foodbox from './foodbox';
import AddFoodForm from './addfood';

function App() {
  const [foods, setFoods] = useState(foodList);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const addFoodHandler = (newFood) => {
    const foodCopy = [...foods];
    foodCopy.push(newFood);
    setFoods(foodCopy);
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div className="foodWrapper">
        <div className="foodList">
          {foods.map((item, index) => (
            <Foodbox key={index} food={item} />
          ))}
        </div>
        <div>
          <button onClick={() => toggleForm()}>Add food</button>
          {showForm ? (
            <AddFoodForm addFood={addFoodHandler} formToggler={toggleForm} />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
