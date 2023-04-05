import React from 'react';
import { Card, Col, Button } from 'antd';


function FoodBox(props) {

    const foodDelete = () => {
        props.callBackToDelete(props.food.name);
      };

  return (
    <Col>
      <Card title={props.food.name} style={{  width: 230, height: 300, margin: 10  }}>
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories:</b> {props.food.calories * props.food.servings} kcal
        </p>
        <Button type="primary" onClick={foodDelete}> Delete </Button>
      </Card>
    </Col>
  )
}

export default FoodBox;