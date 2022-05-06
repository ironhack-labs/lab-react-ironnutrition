import React, { useState } from 'react'

function FoodList(props) {
  const { foodList } = props

  return (
    <div className='body'>
      <h1>Today's Food</h1>
      <ul>
        {foodList.map((element,index ) => {
          return <li>{element.quantity} {element.name} = {element.totalCalories}</li>
        })}
      </ul>
      <p>Total: {foodList.reduce((a,b) => a + b.totalCalories, 0)} </p>
    </div>
  )
}


export default FoodList;