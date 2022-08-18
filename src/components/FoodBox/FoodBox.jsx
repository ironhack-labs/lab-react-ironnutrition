import React from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodBox(props) {

    const {food, deleteFood} = props;

    return (
        <Col className='foodBox'>
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
            <Button onClick={deleteFood} type="primary"> Delete </Button>
          </Card>
        </Col>
      );
}

export default FoodBox