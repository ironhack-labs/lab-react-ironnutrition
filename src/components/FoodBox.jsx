import React from "react";
import { Card, Col, Button } from "antd";

function FoodBox(props) {
  const calories = props.food.calories;
  const servings = props.food.servings;
  console.log("food =", props.food);
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 310, margin: 10 }}
      >
        <img src={props.food.image} height={60} />
        <p>Calories: {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>

        <p>
          <b>Total Calories: {servings * calories} </b> kcal
        </p>

        <Button
          type="primary"
          onClick={function () {
            props.deleteTheFood(props.food.id);
          }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
