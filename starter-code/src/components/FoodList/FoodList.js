import React from 'react';

import FoodBox from '../FoodBox/FoodBox';

const foodList = ({ foods }) => {
    return (
      foods.map( (food, idx) => (
          <FoodBox key={food.name + idx} { ...food }/>
      ))
    );
};

export default foodList;