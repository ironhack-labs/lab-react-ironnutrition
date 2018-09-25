import React from 'react';

import FoodBox from '../FoodBox/FoodBox';

const foodList = ({ foods }) => {
    return (
      foods.map( food => (
          <FoodBox key={food.name} { ...food }/>
      ))
    );
};

export default foodList;