import React, { useState } from 'react';

//import React from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const initialState = {
    totalFood: [...foods],
  };

  console.log('ESTADO INICIAL', initialState);

  const copyTotalFood = initialState.totalFood.map((food) => (
    <FoodBox
      name={food.name}
      image={food.image}
      calories={food.calories}
      key={food.name}
    />
  ));
  return <div className="App">{copyTotalFood}</div>;
}

export default App;
