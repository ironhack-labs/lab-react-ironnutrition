import React from 'react';
import './App.css';

import 'bulma/css/bulma.css';

import foods from './foods.json';

import FoodBox from './components/FoodBox/FoodBox';

function App() {


  return (
    <div className="App">
      <div className="food-container">
        {foods.map(food => {
          return <FoodBox food={food} />
        })}
      </div>
    </div>
  );
}

export default App;
