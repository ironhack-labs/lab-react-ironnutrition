import React from 'react'
import { Col, Card, Button, Image, Space } from 'antd';


const FoodBox = ({ food, deleteFood }) => {
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: "auto", margin: 10 }}
      >
        <Image src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories:  </b>{food.calories * food.servings} kcal
        </p>
        <Button onClick={() => deleteFood(food.name)} type="primary" danger> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox