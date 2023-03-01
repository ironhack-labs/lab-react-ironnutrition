import React from 'react';
import { Card, Row, Col, Divider, Button } from 'antd';


function FoodBox(props) {
  const { food, deleteFood } = props;

  return (
    <div>
      <Row>
        <Col>
          <Divider>
            <Card>
              <img src={food.image} width={120} alt={food.name} />

              <p>
                <strong>{food.name}</strong> <br />
                <small> Calories: {food.calories}</small>
              </p>

              <p>
                Servings: <strong>{food.servings}</strong>
              </p>

              <p>
                <strong>Total Calories: {food.calories}</strong> kcal
              </p>


              <Button onClick={() => deleteFood(food.name)}>Delete</Button>
            </Card>
          </Divider>
        </Col>
      </Row>
    </div>
  );
}

export default FoodBox;
