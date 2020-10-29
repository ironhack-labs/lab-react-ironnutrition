import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      {foods.map((food) => (
        <FoodBox food={food} />
      ))}
    </div>
  );
}

export default App;
