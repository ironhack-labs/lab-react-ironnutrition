import React from 'react';
import './App.css';

import 'bulma/css/bulma.css';

import FoodBox from './components/FoodBox/FoodBox';

import foods from './foods.json';


function App() {
  return (
    <div className="App">
      <FoodBox />
    </div>
  );
}

export default App;
