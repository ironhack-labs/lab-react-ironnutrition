import { Card, Col, Button } from "antd";

function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />

        <p>Calories: {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>

        <p>Total Calories: {props.food.servings * props.food.calories} kcal</p>

        <Button
          type="primary"
          onClick={() => {
            props.onDelete(props.food.id);
          }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
