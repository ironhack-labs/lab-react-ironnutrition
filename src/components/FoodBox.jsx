import "../index.css";
import { Card, Col, Button } from "antd";

function FoodBox(props) {
  return (
    <Col>
      <Card title={props.food.name} style={{width: 230, height: 300, margin: 10}}>
        <img src={props.food.image} />
        <p>Calories: {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.servings * props.food.calories} </b>{" "}
          kcal
        </p>
        <Button type="primary"
          onClick={function () {
            props.callbackToDelete(props.food.id);
          }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
