import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {

  const [foodState, setFoods] = useState(foods);

  const displayFoods = () => {
    setFoods(() => {
      return foodState;
    })
  }

  return (
    <div className="App">
    <FoodBox item={foods} />
    </div>
  );
}

export default App;
