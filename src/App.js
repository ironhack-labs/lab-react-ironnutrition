import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'

function App() {
  return (
    <div className="App">
      <FoodBox 
        name = {"Salad"}
        calories = {150}
        image = {"https://i.imgur.com/DupGBz5.jpg"}
        quantity = {0}

      />
    </div>
  );
}

export default App;
