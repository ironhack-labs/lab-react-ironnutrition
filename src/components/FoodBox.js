import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox({ food }) {
  return (
    <div>
      <p>{food.name}</p>
      <p>{food.calories} kcal</p>
      <img src={food.image} style={{ width: 300 }} alt="food image" />
    </div>
  );
}

export default FoodBox;
