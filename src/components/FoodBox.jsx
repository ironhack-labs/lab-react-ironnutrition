// Your code here
import React from 'react'
import { Card, Col, Button } from "antd";

function FoodBox(props) {

    const totalCalories = props.food.calories * props.food.servings
  return (
    <div>
        <Col>
          <Card title={props.food.name} style={{ width: 230, height: 300, margin: 10 }}>
            <img src={props.food.image} height={60} alt="food" />
            <p>Calories: {props.food.calories}</p>
            <p>Servings {props.food.servings}</p>
            <p>
              <b>Total Calories: {totalCalories}</b> kcal
            </p>
            <Button type="primary" onClick={() => props.deleteFood(props.food.id)}> Delete </Button>
          </Card>
        </Col>
    </div>
  )
}
export default FoodBox;