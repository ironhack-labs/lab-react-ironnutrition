import React from 'react';

function TodayFood(props) {
 
  return (
    <ul>
      <li>{props.inputValue} {props.foodState.name} = {props.foodState.calories}</li>
      
    </ul>
  )
}

export default TodayFood;