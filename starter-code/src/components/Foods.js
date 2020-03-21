import React from 'react';
import foods from '../foods.json';
import { FoodBox } from './FoodBox';

export const FoodsList = () => {
  console.log(foods);

  return (
    <div className="columns">
      <div className="column">
        {foods.map(foodItem => (
          <FoodBox {...foodItem} />
        ))}
      </div>
      <div className="column">Today's foods</div>
    </div>
  );
};
