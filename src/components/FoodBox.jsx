import { Card, Col, Button } from "antd";

function FoodBox(props) {
  let total = props.food.servings * props.food.calories;
  return (
    <Col>
      <Card
        className="card"
        key={props.food.id}
        title={props.food.name}
        style={{ width: 230, height: 400, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />

        <p>Calories: {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>

        <p>
          <b>Total Calories: {total}</b>
          kcal
        </p>

        <Button
          type="primary"
          onClick={function (event) {
            props.delete(props.food.id);
          }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
