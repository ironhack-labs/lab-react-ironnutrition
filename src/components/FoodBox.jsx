// components/FoodBox.jsx
import { Card, Button } from "antd";

function FoodBox({ food, deleteFood }) {
  const { name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  return (
    <Card
      title={name}
      cover={<img alt={name} src={image} />}
      actions={[
        <Button onClick={() => deleteFood(name)} type="danger">
          Delete
        </Button>,
      ]}
    >
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
    </Card>
  );
}

export default FoodBox;

  
  