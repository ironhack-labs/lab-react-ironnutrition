import React from 'react'
import { Card, Col, Button } from 'antd'

function FoodBox({ food, onDeleteFood }) {

  const totalCalories = food.calories * food.servings



  return (
    <Col span={8}>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories}</b> kcal
        </p>
        <Button type="primary" onClick={onDeleteFood}> Delete </Button>
      </Card>
    </Col>
  )
}

FoodBox.defaultValue = {
  onDeleteFood: () => {}
}

export default FoodBox