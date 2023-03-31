import React from 'react'
import FoodBox from '../FoodBox/FoodBox'
import { Row } from 'antd'

function Foodlist({ foods }) {
  return (
    <div className="container">
      <h1>Food List</h1>
      <Row>
        {foods.map(food => <FoodBox food={food} key={food.name} />)}
      </Row>
    </div>
  )
}

export default Foodlist