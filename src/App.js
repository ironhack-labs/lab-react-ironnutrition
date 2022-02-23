import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'; // here?
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFood from './components/AddFood';
import { useState } from 'react';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  const createFood = (foodDetails) => {
    console.log('using the create food function');
    setAllFoods([foodDetails, ...allFoods]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <AddFood createFood={createFood} />
        <FoodBox foods={allFoods} />
      </header>
    </div>
  );
}

export default App;
