import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';

function App() {
  const [food, setFoods] = useState(foods);

  const displayFoods = () => {
    setFoods((food) => {
      return food;
    });
  };

  return (
    <div className="App">
      <FoodBox foods={food} callbackDisplayFoods={displayFoods} />
    </div>
  );
}


export default App;