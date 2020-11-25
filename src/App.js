import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox.js'

function App() {
  
  return (
    <div className="App">
      <h1>IronNutrition</h1>
        
      <div className="food-container">
        {foods.map((item, index) => (
            <FoodBox key={index} food={item} />)
            )}
      </div>
    
    </div>
  );
}

export default App;
