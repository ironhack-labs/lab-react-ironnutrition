import React from 'react'
import { Card, Col, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';


export const FoodBox = ({name, calories, image, servings, deleteFood}) => {
    let number = servings * calories;

  return (
    <Col >
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {number}</b> kcal
        </p>
        <Button type="primary" onClick={()=>deleteFood({name})}> Delete </Button>
      </Card>
    </Col>
  )
}

export default FoodBox;
