import React from 'react';
import FoodList from './components/FoodList'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

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
