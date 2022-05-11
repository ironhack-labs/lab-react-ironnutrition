import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {

  const [foodState, setFoods] = useState(foods);

  const displayFoods = () => {
    setFoods((foodState) => {
      return foodState;
    });
  }

  return (
    <div className="App">
      <FoodBox foods={foodState} callbackDisplayFoods={displayFoods}/>
    </div>
  );
}

export default App;
