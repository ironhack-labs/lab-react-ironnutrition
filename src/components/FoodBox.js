import { useState } from "react";
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  return (
    <>
    <h1>Food List</h1>
    <div className="FoodBox">
      {props.foods.map((food) => {
        return (
          <Col>
            <Card
              title={food.name}
              style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={food.image} height={60} alt="food" />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
              </p>
              <Button type="primary"> Delete </Button>
            </Card>
          </Col>
        );
    })}
    </div>
    </>
  );
}

export default FoodBox;
