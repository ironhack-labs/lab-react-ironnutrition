import React from 'react';
import FoodBox from './FoodBox';
import foods from './../foods.json';

const FoodList = () => {
  return(
    foods.map((food, i) => {
      return <FoodBox key={i} food={food}/>
    })
  );
}

export default FoodList;