import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox.jsx';
import AddFood from './components/AddFood.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
    <h1 style={{fontSize: '4rem'}}>IronNutrition</h1>
    <AddFood/>

    {foods.map((foodItem, index) => {
      return <FoodBox key={index} {...foodItem}/>;
    })}
    </div>
  );
}

export default App;
