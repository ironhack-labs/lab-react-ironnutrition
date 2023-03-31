import React from 'react'
import FoodBox from '../FoodBox/FoodBox'

function Foodlist({ foods }) {
  return (
    <div className="container">
      <h1>Food List</h1>
      {foods.map(food => <FoodBox food={food} key={food.name} />)}
    </div>
  )
}

export default Foodlist