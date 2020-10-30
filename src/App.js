import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

function App() {
  return (
    <div className="App">
      <AddFood />
      <div className="food-container">
        {foods.map((food) => (
          <FoodBox food={food} />
        ))}
      </div>
    </div>
  );
}

export default App;
