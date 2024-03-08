import { Card, Col, Button } from "antd";

function FoodBox({ food, deleteFoodItem }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 350, margin: 10 }}>
        <img src={food.image} />

        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>

        <p>
          <b>Total Calories: {food.servings * food.calories} </b> kcal
        </p>

        <Button
          type="primary"
          className="cta-delete"
          onClick={() => deleteFoodItem(food.id)}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
