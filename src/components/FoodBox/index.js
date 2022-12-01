import React from 'react'
import { Button, Card, Col } from 'antd'

const FoodBox = ({name, calories, servings, image, deleteFood, index}) => {


  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 320}}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type='primary' onClick={() => deleteFood(index)}>Delete</Button>
      </Card>
    </Col>
  )
}

export default FoodBox