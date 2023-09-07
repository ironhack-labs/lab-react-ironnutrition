import React from 'react'
import { Card, Button, Col} from "antd";

export default function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories.toString()}</p>
        <p>Servings: {props.food.servings.toString()}</p>
        <p>
          <b>Total Calories: {(props.food.calories*props.food.servings).toString()}</b> kcal
        </p>
        <Button onClick={()=> props.deleteFood(props.food.name)} type="primary"> Delete </Button>
      </Card>
    </Col>
  )
}
