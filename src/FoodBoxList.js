import React from 'react';
import FoodBox from './FoodBox';

function FoodBoxList(props) {
  const addToMenu = (food) => {
    props.onAddToMenu(food);
  };

  return props.foods.map((food) => {
    return <FoodBox onAddToMenu={addToMenu} key={food.name} food={food} />;
  });
}

export default FoodBoxList;
