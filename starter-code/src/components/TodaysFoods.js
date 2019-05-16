import React from "react";

const TodaysFoods = ({foodList}) => (
  <div>
    <h3>Today's Foods</h3>
    <ul>
      {foodList.map(item => (
        <li>Amount {item.name} = Amount {item.calories}</li>
      ))}
    </ul>
    <p>Total: {foodList.calories} cal</p>
  </div>
)

export default TodaysFoods