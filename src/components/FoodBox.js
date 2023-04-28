import React from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodBox({food}) {
  return (
    <div className="FoodCard">
        {food.map(food => {
        return (
            <div>
              <Row>
                <Col>
                  <Card title={food.name}>
                  <img src={food.image} width="100px" />
                  <p>Calories: {food.calories}</p>
                  <p>Servings: {food.servings}</p>
                  <p>Total Calories: {food.calories}</p>
                  <Button onClick={() => {}}>Delete</Button>
                  </Card>
                </Col>
              </Row>
            </div>
        );
      })}
    </div>
  );
}
 
export default FoodBox;