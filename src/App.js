import React from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <FoodBox/>
    </div>
  );
}

export default App;
