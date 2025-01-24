import { Card, Col, Button } from "antd";
import Logo from "../assets/react.svg";

function FoodBox({ food, handleDelete }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={Logo} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>
        <p>
          <b>
            Total Calories: {food.calories} * {food.servings}
          </b>{" "}
          kcal
        </p>
        <Button
          type="primary"
          onClick={() => {
            handleDelete(food.id);
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
