import React from 'react';
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const {foods} = props;
  return (
    <div>
    {foods.map(food => {
        return (
        <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>{food.calories}</p>
        <p>{food.servings}</p>
        <p>
          <b>Total Calories: {food.calories} *  {food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
    )
    })} 
    </div>
  );
}

export default FoodBox;