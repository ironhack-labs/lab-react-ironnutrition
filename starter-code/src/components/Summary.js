import React from "react"

function DisplayList(arr){
  return (
    <ul>
      {arr.map((eachElement, i) =>{
        return (
        <li key = {i}>
          {eachElement.quantity} {eachElement.name} = {Number(eachElement.quantity) * Number(eachElement.calories)} cal
        </li>)
      })}
    </ul>
  )
}

function calculateTotal(arr){
  return(arr.reduce((sum, eachElem) => sum += eachElem.calories * eachElem.quantity, 0));
}

function Summary(props){
  return(
    <div>
      <h4 className = "subtitle is-4">Today's foods</h4>
      {DisplayList(props.foods)}
      <p>Total: {calculateTotal(props.foods)} cal</p>
    </div>
  )
}

export default Summary