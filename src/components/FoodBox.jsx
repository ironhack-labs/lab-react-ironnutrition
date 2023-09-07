import React from 'react';
import { Card, Col, Button } from 'antd';

// {
//   "name": "Pizza",
//   "calories": 400,
//   "image": "https://i.imgur.com/eTmWoAN.png",
//   "servings": 1
// }

// Iteration 2
function FoodBox(props) {
  const { food } = props;

  console.log(food)

  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
