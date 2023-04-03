import React from 'react'
import { Card, Col, Button } from "antd";

function FoodBox({ food }) {
  return (
    <div>
      <Col>
      <Card title={food.name} style={{ width: 250, height: 300, margin: 10 }}>
        <img src={food.image} alt={food.name} width = {80} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <b>Total Calories: {food.calories * food.servings}</b> kcal
        <Button onClick={() => { }}>Delete</Button>
        </Card>
      </Col>   
    </div>
  )
}

export default FoodBox