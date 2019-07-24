import React from 'react'

const TodayFood = (food) => {
  return (
    <div>
      <h2>Today's Foods</h2>
      <ul>
        {this.state.today.map(food => {
          return <li>{food.quantity} {food.name} {food.calories}</li>
        })}
      </ul>
    </div>
  )
}

export default TodayFood