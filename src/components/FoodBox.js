import React from 'react';
import { Button } from 'antd';
import { Card, Col } from 'antd';

function FoodBox(props) {
  const handleDelete = () => {
    props.onDelete(props.food.id);
  };

  return (
    <Col>
      <Card title={props.food.name}>
        <img src={props.food.image} alt={props.food.name} width={225} />

        <div>
          <p style={{ fontSize: '25px' }}><strong>Calories: </strong>{props.food.calories}</p>
          <p style={{ fontSize: '25px' }}><strong>Servings:</strong> {props.food.servings}</p>
          <p style={{ fontSize: '25px' }}><strong>Total Calories: </strong> {props.food.calories * props.food.servings} kcal</p>

          <Button type="primary" onClick={handleDelete}>Delete</Button>
        </div>
      </Card>
    </Col>
  );
}

export default FoodBox;