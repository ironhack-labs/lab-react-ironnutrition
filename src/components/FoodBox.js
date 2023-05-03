import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from "react"
import FoodsJSON from "../foods.json"

function FoodBox({food, deleteFood}) {
    return (
      <Col>
        <Card
          title={food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={food.image} height={60} alt="food" />
          <p>Calories: {food.calories}</p>
          <p>Servings: <b>{food.servings}</b></p>
          <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
          <Button onClick={() => deleteFood(food.name)} type="primary"> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;
  