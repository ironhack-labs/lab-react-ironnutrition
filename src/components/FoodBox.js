import React from 'react';
import { Card, Col, Button } from 'antd';

export const FoodBox = ({ food, deleteContact }) => {
  
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 350, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>
            Total Calories: {food.calories} * {food.servings}{' '}
          </b>{' '}
          kcal
        </p>
        <Button type="primary" onClick={() => deleteContact(food.name)}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
};
