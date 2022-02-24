import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArr from './foods.json';
import Foodbox from './components/Foodbox';
import AddFood from './components/AddFood';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsArr);
  const [displayForm, setDisplayForm] = useState(false);

  const addNewFood = (food) => {
    const updatedFoods = [...foods, food];
    setFoods(updatedFoods);
  };

  const toggleForm = () => {
    setDisplayForm(!displayForm);
  };

  const searchFor = (search) => {
    const searchResults = foods.filter((food) => food.name.includes(search))
    console.log(searchResults)
    setFoods(searchResults);
  }

  return (
    <div className="App">
      <h1>IronNutritions</h1>

      <Search searchFor={searchFor} />      

      <button className='button is-info' onClick={toggleForm}>{displayForm ? 'Hide form' : 'Add food'}</button>
      {displayForm && <AddFood addNewFood={addNewFood} />}

      {foods.map((food, index) => (
        <Foodbox key={index} food={food} />
      ))}
    </div>
  );
}

export default App;
