import { Row } from "antd"
import React from 'react'
import FoodCard from './FoodCard'

export default function FoodList({ foods }) {
  return (
    <Row>
      {foods.map(food => (
        <FoodCard key={food.name} food={food} />
      ))}
    </Row>
  )
}
