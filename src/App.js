import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodList from './components/foodlist/FoodList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title m-5">IronNutrition</h1>
        <FoodList />
      </div>
    </div>
  );
}

export default App;
