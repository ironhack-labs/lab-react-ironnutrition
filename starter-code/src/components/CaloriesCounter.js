import React from 'react'

const CaloriesCounter = ({ food, calories, value }) => (
  <li>
    {value} {food}: {calories} calories
  </li>
)

export default CaloriesCounter
