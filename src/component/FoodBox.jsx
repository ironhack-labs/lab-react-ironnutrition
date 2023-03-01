import React from 'react'
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const {foods, deleteFood} = props
  return (
    <div>
   <Col>
      <Card
        title={foods.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={foods.image} height={60} alt="food" />
        <p>Calories: {foods.calories}</p>
        <p>Servings: {foods.servings}</p>
        <p>
          <b>Total Calories: {foods.calories * foods.servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(foods.name)}> Delete </Button>
      </Card>
    </Col></div>
  );
}

export default FoodBox;
