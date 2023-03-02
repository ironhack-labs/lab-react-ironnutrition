import { Card, Col, Button } from 'antd';
import React from 'react';

// Iteration 2
function FoodBox({ oneFood, handleDelete }) {
  // const { oneFood } = props;
  console.log(oneFood);

  return (
    <Col>
      <Card
        title={oneFood.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={oneFood.image} height={60} alt="food" />
        <p>Calories: {oneFood.calories}</p>
        <p>Servings: {oneFood.servings}</p>
        <p>
          <b>
            Total Calories: {oneFood.calories} * {oneFood.servings}
          </b>{' '}
          kcal
        </p>
        {/* <Button type="primary"> Delete </Button> */}
        <Button type="primary" onClick={() => handleDelete(oneFood.name)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
