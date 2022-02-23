import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';
import AddFood from './components/AddFood';

function App() {
  const [foodsArr, setFoods] = useState(foods);

  const createFood = (foodDetails) => {
    setFoods([foodDetails, ...foodsArr]);
  };

  return (
    <div className="App">
      <AddFood createNewFood={createFood} />

      {foodsArr.map((food) => {
        return (
          <Foodbox
            name={food.name}
            calories={food.calories}
            image={food.image}
          />
        );
      })}
    </div>
  );
}

export default App;
