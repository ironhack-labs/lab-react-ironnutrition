import React, {Component} from 'react'
import FoodBox from './FoodBox';

const FoodList = ({foodList}) => {
  return(
    <div className='eachBox'>
      {foodList.map((e,i) => {
        return <FoodBox {...e} key = {i} /> 
      })}
    </div>
  )
}

export default FoodList