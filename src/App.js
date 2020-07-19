import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import foods from './foods.json';

function App() {
  return (
    <div className="App">
      <FoodBox foods={foods} />
    </div>
  );
}

export default App;
