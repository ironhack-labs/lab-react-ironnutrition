import React from 'react';
import { Button } from 'antd';
import { Card, Col } from 'antd';

function FoodBox(props) {
  return (
    <Col>
      <Card title={props.food.name}>
        <img src={props.food.image} alt={props.food.name} width={225} />

        <div>
          <p style={{ fontSize: '25px' }}>Calories: {props.calories}</p>
          <p style={{ fontSize: '25px' }}>Servings: {props.servings}</p>
          <p style={{ fontSize: '25px' }}>Total Calories: {props.calories * props.servings} kcal</p>

          <Button type="primary">Delete</Button>
        </div>
      </Card>
    </Col>
  );
}

export default FoodBox;