import React from 'react'
import {Col, Card, Button} from 'antd'

function FoodCard({food, deleteFood}) {
  const {name, calories, image, servings} = food
  
  return (
  <Col>
  <Card
  title={name}
  style={{ width: 300, height: 350, margin: 20 }}>
  <img src={image} height={80} alt="food" />
  <p>Calories: {calories}</p>
  <p>Servings: <b>{servings}</b></p>
  <p><b>Total Calories: {calories * servings}</b> kcal</p>
  <Button type="primary" onClick={() => deleteFood(name)}> Delete </Button>
  </Card>
  </Col>
  )
}

export default FoodCard;