import React, { useState } from 'react';

import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

function App({ textFood, caloriesFood, imageFood }) {
  const [itemName, setItemName] = useState('');

  return (
    <div className="div-main">
      <div>
        {foods.map((food) => {
          return (
            <FoodBox
              textFood={food.name}
              caloriesFood={food.calories}
              imageFood={food.image}
            />
          );
        })}
        ;
      </div>
      <div>
        <p>Today´s food</p>
      </div>
    </div>
  );
}

export default App;
