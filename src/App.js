import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBoxes from './components/FoodBoxes';
import SearchBar from './components/SearchBar';
import TodaysFoods from './components/TodaysFoods';

function App() {
  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
    
        <FoodBoxes />

    </div>
  );
}

export default App;
