//jshint esversion:8

import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foodData from './foods.json';
import { FoodBox } from './components/FoodBox';
import { useState } from "react";
import { AddNewFood } from './components/AddNewFood';

function App() {
  
  let [foods, setFoods] = useState(foodData);

  let [showForm, setShowFrom] = useState(false);

  const addFood = (food) => {
    const updatedFoods = [...foods, food];
    setFoods(updatedFoods);
    handleShowForm();
  };

  const handleShowForm = () => {

    if (showForm) {
      setShowFrom(false);
    } else {
      setShowFrom(true);
    }
  };
  

  return (
    <div className="App">
      {foods.map((food, index) => {
        return <FoodBox key={index.toString()} food={food} />;
      })}

      {showForm && <AddNewFood handleAddFood={addFood}/>}
      <button onClick={handleShowForm}>{showForm?"Hide Form":"Show Form"}</button>
    </div>
  );
}

export default App;
