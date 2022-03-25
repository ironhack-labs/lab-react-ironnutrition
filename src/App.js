import React, { Component }  from 'react';
import FoodBox from './components/FoodBox/FoodBox';
import foods from './foods.json'
import './assets/styles/general.scss'
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <FoodBox food={foods} />
    </div>
  );
}

export default App;
