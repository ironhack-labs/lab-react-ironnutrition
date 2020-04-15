import React, { Component } from 'react';
import FoodBox from './FoodBox';

const FoodBoxes = (props) => {
  const { foods } = props;
  return (
    <div className='column'>
      {foods.map((food, index) => {
        const { name, calories, image, quantity } = food;
        return <FoodBox
          key={index + name}
          name={name}
          calories={calories}
          image={image}
          quantity={quantity}
          />
      })}
  </div>
  );
}

export default FoodBoxes;
