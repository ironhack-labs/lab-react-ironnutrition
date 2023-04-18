import React from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

const FoodBox = ({ foods }) => {
  return (
    <div>
      {foods.map((food) => (
        <Row key={food.name}>
          <Col>
            <Card title={food.name}>
              <img src={food.image} alt={food.name} width={100} />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>Total Calories: {food.calories * food.servings}</p>
              <Button onClick={() => {}}>Delete</Button>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default FoodBox;
