import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox({ food }) {
  const totalCalories = (food.calories * food.servings);
  return (
    <Col span={8}>
      <Card title={food.name} style={{ width: 210, height: 300, margin: 8 }}>
        <img
          src={food.image}
          style={{
            width: 100,
          }}
          alt="foodImage"
        />
        <p>Calories: {food.calories} kcal</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
