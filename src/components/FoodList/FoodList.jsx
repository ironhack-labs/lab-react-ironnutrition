import React from 'react'
import FoodBox from '../FoodBox/FoodBox'
import { Row } from 'antd'

function FoodList({ foods }) {
  return (
    <div className='mt-3'>
      <h1 className='fw-bold' >Food List</h1>
      <Row>{foods.map(food => (<FoodBox food={food} key={food.name} />))}</Row>
    </div>
  )
}

export default FoodList