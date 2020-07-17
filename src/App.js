import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodComponent from './components/FoodComponent';

const copyFood = [...JSON.parse(JSON.stringify(foods))]

function App() {
  return (
    <div className="App">
      <FoodComponent food={copyFood} />
    </div>
  );
}

export default App;
