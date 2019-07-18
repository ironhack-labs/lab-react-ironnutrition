import React from 'react'

const TodaysFood = (props) => {
  return (
    <div>
      <li>{props.quantity} {props.name} = {props.quantity*props.calories} cal</li>     
    </div>
  )
}

export default TodaysFood
