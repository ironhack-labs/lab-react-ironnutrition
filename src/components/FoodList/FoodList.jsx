import React from 'react';
import FoodBox from '../FoodBox/FoodBox';
import { useState } from 'react';

function FoodList(props) {
  const { foodDataProps } = props;

  /* const [foods, setFoods] = useState(foodDataProps);

  const foodProps = (food) => {
    const updateFood = [food, ...foods];
    setFoods(updateFood);
  }; */
  return (
    <div>
      {foodDataProps.map((foodMaped) => {
        return <FoodBox foodProps={foodMaped} />;
      })}
    </div>
  );
}

export default FoodList;
