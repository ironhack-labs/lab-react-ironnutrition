import React from 'react';
import Search from './components/Search'
import FoodList from './components/FoodList'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <Search />
        <FoodList />
      </div>
    </div>
  );
}

export default App;
