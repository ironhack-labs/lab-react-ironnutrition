import React from 'react';
import FoodBox from './FoodBox';
import foods from './foods.json';

function App() {
  return (
    <div>
      {foods.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <img src={food.image} width={100} alt={food.name} />
          <div>
            <FoodBox food={food} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
