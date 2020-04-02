import React, { useContext } from 'react'
import FoodBox from './FoodBox'
import {FoodContext} from '../create/FoodContext'

const FoodList = () => {
    const {foods} = useContext(FoodContext);
    return(
      foods.map((food, i) => {
        return <FoodBox key={i} food={food}/>
      })
    );
  }
  
  export default FoodList;
  
