import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { name, calories, image, servings } = props.food;

  const handleDelete = () => {
    props.onDelete();
  };

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} kcal</b>
        </p>
        <Button type="primary" onClick={handleDelete}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
