import React from 'react';

import FoodBox from '../FoodBox/FoodBox';

const foodList = ({ foods, addToFood}) => {
    return (
      foods.map( (food, idx) => (
          <FoodBox key={food.name + idx} { ...food } addNewProduct={ addToFood }/>
      ))
    );
};

export default foodList;