import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsArr);



  return (
    <div className="App">
      <FoodBox listOfFoods={foods}/>
    </div>
  );
}

export default App;
