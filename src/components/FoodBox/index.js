import { Button, Card, Col } from 'antd';
import React from 'react'

const FoodBox = (props) => {
  const { food, deleteFood, index } = props;
  const {name, calories, image, servings} = food;
  return (
    <Col>
      <Card title={name} style={{width: "350px", height: "350px"}}>
        <img src={image} alt={name} style={{width: "100px", height:"100px", objectFit:"contain"}}/>
        <p><strong>Servings: </strong> {servings}</p>
        <p><strong>Total Calories: </strong>{calories}kcal</p>
        <Button type='primary' onClick={() => deleteFood(index)}>Delete</Button>
      </Card>
    </Col>
  )
}

export default FoodBox;