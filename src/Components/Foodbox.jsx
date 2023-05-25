import { useState } from "react"
import {Card, Row, Col, Divider, Input} from "antd";

function Foodbox(prop) {
  let totalCalories = prop.food.calories*prop.food.servings;

  return (
    <Col>
      <Card
        title={prop.food.name}
        style={{width: 230, height: 300, margin: 10}}                                                               
      >
        <img src={prop.food.image} height={60} alt="food" />
        <p>Calories: {prop.food.calories}</p>
        <p>Servings: {prop.food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories}</b> kcal
        </p>
        <button type="primary"> Delete </button>
      </Card>
    </Col>
  )
}

export default Foodbox