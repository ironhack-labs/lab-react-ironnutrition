import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodComponent from './components/FoodComponent';

function App() {
  return (
    <div className="App">
      <FoodComponent food={foods} />
    </div>
  );
}

export default App;
