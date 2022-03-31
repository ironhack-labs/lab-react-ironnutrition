import React from 'react';
import logo from './logo.svg';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const foodList = foods.map( (food) => {
    return <FoodBox key={food.name} {...food}/>;
  });

  return (
    <div>
      {foodList}
    </div>
  );
}

export default App;
