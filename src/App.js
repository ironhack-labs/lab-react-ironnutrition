import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
    <h1>IronNutrition</h1>
     <FoodBox/>
    </div>
  );
}

export default App;
