import React from "react";

const TodaysFood = (props) => {
  return (
    <ul>
      {props.quantity > 0 && <span>{props.quantity} {props.name}</span>}
      {props.quantity > 0 && <button onClick={props.deleteOneMethod}>Delete</button>}
    </ul>
  )
}


export default TodaysFood;