import React from "react";

const TodaysFood = (props) => {
  return (
    <div className='todaysFood'>
      <span>{props.quantity > 0 && <span>{props.quantity} {props.name}</span>}</span>
      <span>{props.quantity > 0 && <button onClick={props.deleteOneMethod} className="button delete-btn is-danger is-small">Delete</button>}</span>
    </div>
  )
}


export default TodaysFood;