import React from 'react'
import { Card, Col, Button } from "antd"

export default function FoodCard({ food, onDelete }) {
  return (
    <Col span={8}>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img height={60} src={food.image} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings}</b> kcal
        </p>
        <Button onClick={() => onDelete(food.name)} type="primary">Delete</Button>
      </Card>
    </Col>
  )
}
