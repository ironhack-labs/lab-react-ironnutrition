// components/FoodBoxes.js

import React from 'react';
import FoodBox from './FoodBox';

const FoodBoxes = (props) => {
  const { foods, addTodaysFoods } = props;
  return (
    <div>
      {foods.map((food, index) => {
        const { name, calories, image, quantity, show } = food;
        if (show)
          return <FoodBox
              key={index + name}
              name={name}
              calories={calories}
              image={image}
              quantity={quantity}
              show={show}
              addTodaysFoods={addTodaysFoods}
            />
        else return false
      })}
    </div>
  );
}

export default FoodBoxes;
