import React from 'react';
import FoodBoox from "./components/FoodBox/FoodBox"
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <FoodBoox food="Salad" />
    </div>
  );
}

export default App;
