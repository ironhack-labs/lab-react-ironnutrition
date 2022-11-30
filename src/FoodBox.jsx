import React from 'react';

import { Card, Col, Button } from 'antd';

// Iteration 2
export default function FoodBox({ food, foods, setFoods }) {
    const deleteFood = (name) => {
        const filteredFoods = foods.filter(food => {
            return food.name !== name
        })
        setFoods(filteredFoods)
    }
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button onClick={() => deleteFood(food.name)} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}
