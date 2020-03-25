import React, {useContext} from 'react';
import FoodBox from './FoodBox';
import {FoodContext} from './../contexts/FoodContext';

const FoodList = () => {
  const {foods} = useContext(FoodContext);

  return(
    foods.map((foods,index) => {
      return <FoodBox key={index} food={foods} />
    })
  )
}

export default FoodList;