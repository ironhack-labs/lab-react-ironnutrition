import React from 'react';
import FoodBox from './FoodBox';

export default function FoodList(props) {
  return (
    <div>
      {props.foods?.map((food, index) => (
        <FoodBox
          key={`${food.name}-${index}`}
          food={food}
          addFoodMenu={props.addFoodMenu}
        />
      ))}
    </div>
  );
}
