import React from 'react'
import FoodBox from './FoodBox'

const FoodList = ({foods}) => {

  const list = foods.map( (item, i) => {
    return <FoodBox food={item} key={i}/>
  })

  return (
    <div>{list}</div>
  )
}

export default FoodList