import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';



function App() {
  return (
    <div className="App">
     <FoodBox/>
    </div>
  );
}

export default App;
