import React from 'react';
import FoodBox from './FoodBox';

function FoodBoxList(props) {
  return props.foods.map((food) => {
    return <FoodBox key={food.name} food={food} />;
  });
}

export default FoodBoxList;
