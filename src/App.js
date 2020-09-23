import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'

function App() {
  return (
    <div className="App">
      <FoodBox items={foods} />
    </div>
  );
}

export default App;
