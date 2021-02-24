import React from 'react';
import './App.css';
import FoodBox from './FoodBox';

import foods from '../foods.json';

function App() {
  return (
    <>
      {foods.map((food, idx) => (
        <FoodBox
          key={idx}
          image={food.image}
          name={food.name}
          calories={food.calories}
        />
      ))}
    </>
  );
}

export default App;
