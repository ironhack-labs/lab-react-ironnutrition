import React from 'react';

import { Card, Col, Button } from 'antd';

const FoodBox = ({ food, deleteFoodCard }) => {
  return (
    <div>
      <Col>
        <Card
          title={food.name}
          style={{
            width: 230,
            height: 300,
            margin: 10,
          }}
        >
          <img src={food.image} height={60} alt="food" />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.calories} kcal</b>
          </p>
          <Button type="primary" onClick={() => deleteFoodCard(food.name)}>
            Delete
          </Button>
        </Card>
      </Col>
    </div>
  );
};

export default FoodBox;
