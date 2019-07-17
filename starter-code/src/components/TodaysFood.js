import React from 'react'

const TodaysFood = (props) => {
  return (
    <div>
      <li>{props.name} = {props.calories}cal</li>
      
      
    </div>
  )
}

export default TodaysFood
