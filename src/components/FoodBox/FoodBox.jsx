import React from 'react'
import { Card, Col, Button } from 'antd'

function FoodBox({ food, onDeleteFood }) {

  const totalCalories = food.calories * food.servings



  return (
    <Col span={8}>
      <Card
        title={food.name}
        style={{ margin: 10 }}
      >
        <img src={food.image} height={90} alt="food" className="imgfood"/>
        <p><b>Calories:</b> {food.calories}</p>
        <p><b>Servings:</b> {food.servings}</p>
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