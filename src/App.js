import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">

      {foods.map(food => <FoodBox food={ food } />)}
      
    </div>
  );
}

export default App;
