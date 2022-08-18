import React from 'react'
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const {food} = props  
  
  let totalCalories = props.food.calories*props.food.servings

  return (
    <div>
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories} </p>
        <p>Servings: <b> {food.servings} </b> </p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>


    </div>
  )
}

export default FoodBox