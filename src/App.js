import React from 'react';
import FoodBoox from "./components/FoodBox/FoodBox"
import 'bulma/css/bulma.css';
import './App.css';

import foods from './foods.json';

function App() {
  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <FoodBoox />
    </div>
  );
}

export default App;
