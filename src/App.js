import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './component/FoodBox';

function App() {
  return (
    <FoodBox/>
  );
}

export default App;
