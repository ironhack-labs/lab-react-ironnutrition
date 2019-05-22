import React from 'react'
import FoodBox from './FoodBox'

const FoodList = ({foods}) => {

  const list = foods.map( (item, i) => {
    return (
      <div> 
        <FoodBox food={item} key={i}/>
      </div>
    )
  })

  return (
    <div>{list}</div>
  )
}

export default FoodList