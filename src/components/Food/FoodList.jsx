import { Row } from "antd"
import React from 'react'
import FoodCard from './FoodCard'

export default function FoodList({ foods, onDelete }) {
  
  return (
    <Row>
      {foods.map(food => (
        <FoodCard key={food.name} food={food} onDelete={onDelete} />
      ))}
    </Row>
  )
}
