import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from '../src/FoodBox/FoodBox';

import './App.css';

function App() {

  const displayFoods = () => {
    return foods.map(food => <FoodBox food={food} />)
  }

  return (
    <div>
      <h1>Hello World!!</h1>
      {displayFoods()}
    </div>
  );
}

export default App;
