import React, { useState } from 'react';
import foodsArray from '../foods.json';
import { FoodBox } from './FoodBox';

export const FoodsList = () => {
  const [foods, setFoods] = useState(foodsArray);

  return (
    <div className="columns">
      <div className="column">
        {foods.map((foodItem, i) => (
          <FoodBox
            key={i}
            id={i}
            name={foodItem.name}
            calories={foodItem.calories}
            image={foodItem.image}
            quantity={1 || foodItem.quantity}
          />
        ))}
      </div>
      <div className="column">Today's foods</div>
    </div>
  );
};
