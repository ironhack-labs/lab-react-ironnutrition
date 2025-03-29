import { Card, Col, Button } from "antd";

function FoodBox({ food, deleteFood }) {
  const totalCalories = food.servings * food.calories;

  return (
    <Col>
      <Card title={food.title} style={{ width: 200, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories}</b> kcal
        </p>
        <Button
          type="primary"
          onClick={() => {
            deleteFood(food.id);
          }}
        >
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
