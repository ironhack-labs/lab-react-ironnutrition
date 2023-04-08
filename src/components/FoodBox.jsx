import { Card, Col, Button } from 'antd';

import React from 'react';

function FoodBox({ food, onClickDelete}) {

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories{food.calories}</p>
        <p>Servings{food.servings}</p>
        <p>
          <b>Total Calories: {food.calories + food.servings}</b> kcal
        </p>
        <Button className="btn btn-danger" onClick={onClickDelete}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
