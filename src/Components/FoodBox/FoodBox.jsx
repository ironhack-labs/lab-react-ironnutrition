import React from 'react'
import { Card, Col, Button } from 'antd';



function FoodBox(props) {
    const {food, deleteFoodBtn } = props
    const result = props.food.calories * props.food.servings
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {result} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFoodBtn(food.name)}> Delete </Button>
      </Card>
    </Col>
  )
}

export default FoodBox