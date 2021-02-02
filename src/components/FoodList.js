import { render } from '@testing-library/react';
import React from 'react';
import FoodBox from './FoodBox';

function FoodList(props) {
  const foodList = props.foods.map((food) => {
    return (
      <FoodBox
        key={food.name}
        food={food}
        handleTodaysFood={props.handleTodaysFood}
      />
    );
  });

  return foodList;
}

export default FoodList;
