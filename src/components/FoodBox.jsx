import { Card, Col, Button } from "antd";

function FoodBox({ food, onDeleteFood }) {
  let totalCalories = food.servings * food.calories;

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt={food.name} />

        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>

        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>

        <Button onClick={() => onDeleteFood(food.id)}>Delete</Button>
      </Card>
    </Col>
  );
}
export default FoodBox;
