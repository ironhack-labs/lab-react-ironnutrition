import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodList from './components/FoodList/FoodList';

function App() {
  return (
    <div className="App">
    <h1 className="title">IronNutrition</h1>
    <FoodList />
    </div>
  );
}

export default App;
