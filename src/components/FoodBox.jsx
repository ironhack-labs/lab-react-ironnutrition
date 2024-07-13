// Your code here

import { Card, Button } from "antd";

function FoodBox({ food, deleteFood }) {
  return (
    <Card
      title={food.name}
      style={{ width: 300, margin: 10 }}
      cover={<img alt={food.name} src={food.image} />}
      actions={[
        <Button type="primary" danger onClick={() => deleteFood(food.name)}>
          Delete
        </Button>,
      ]}
    >
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.servings * food.calories}</b> kcal
      </p>
    </Card>
  );
}

export default FoodBox;
