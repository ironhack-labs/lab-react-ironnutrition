import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBoxes from './components/FoodBoxes';

function App() {
  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>   
        <FoodBoxes />
    </div>
  );
}

export default App;
