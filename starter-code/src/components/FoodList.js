import React from 'react'
import FoodBox from './FoodBox'

const FoodList = ({foods, addTodaysFood, addCal}) => {

  const list = foods.map( (item, i) => {
    return <FoodBox addTodaysFood={addTodaysFood} addCal={addCal} {...item} key={i} num={i}/>
  })

  return (
    <div>{list}</div>
  )
}

export default FoodList