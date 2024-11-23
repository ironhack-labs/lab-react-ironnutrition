import React from "react";
import { Card, Button } from "antd";

function FoodBox({ food, onDelete }) {
  const totalCalories = food.calories * food.servings;

  return (
    <Card
      title={food.name}
      bordered={false}
      style={{ width: 300, margin: "16px", textAlign: "center" }}
      cover={<img alt={food.name} src={food.image} style={{ height: 200 }} />}
    >
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {totalCalories}</b> kcal
      </p>
      <Button type="primary" danger onClick={() => onDelete(food.name)}>
        Delete
      </Button>
    </Card>
  );
}

export default FoodBox;
