import { Card, Col, Button } from 'antd';

import React from 'react';

function FoodBox(props) {
  const { food } = props;
  const caloriesServing = (food.calories) * (food.servings)
  return (
    <div>
      <Col>
        <Card
          title={food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={food.image} height={60} alt="food" />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>
              Total Calories: {caloriesServing}
            </b>{' '}
            kcal
          </p>
          <Button type="primary"> Delete </Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;
