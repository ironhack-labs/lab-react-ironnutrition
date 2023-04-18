import React from 'react';
import { Card, Row, Col, Button } from 'antd';

const FoodBox = ({ foods, handleDelete }) => {
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
              <Button onClick={() => handleDelete(food.name)}>Delete</Button>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default FoodBox;
