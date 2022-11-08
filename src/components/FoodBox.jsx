import React from 'react'
import { Card, Col, Button } from 'antd';

function foodBox({ food, onRemove }) {

  

  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 320, margin: 10 }}
      >
        <img src={food.image} height={70} alt="" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories} * {food.servings} </b> kcal
        </p>
        <Button value="large" type="primary" onClick={() => onRemove(food.name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default foodBox;
