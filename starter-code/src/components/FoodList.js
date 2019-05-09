import React from 'react';

import FoodBox from './FoodBox';

const FoodList = ({ foods, addToTodaysFood }) => {
  return foods.map((food, index) => {
    return <FoodBox key={index} id={index} {...food} addToTodaysFood={addToTodaysFood} />;
  });
};

export default FoodList;
