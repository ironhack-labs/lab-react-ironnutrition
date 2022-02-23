import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';

function App() {
  const [foodsArr, setFoods] = useState(foods);

  return (
    <div className="App">
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
