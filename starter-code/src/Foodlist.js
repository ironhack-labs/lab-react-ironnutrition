
import React from 'react';
import FoodBox from './Foodbox';


const foodList = ({ foods }) => {
   return (
     foods.map(( food, i) => (
         <FoodBox key={food.name + i} { ...food }/>
     ))
   );
};
export default foodList; 