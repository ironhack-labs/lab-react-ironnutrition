import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
    const { food } = props;

    console.log(food)

    return (
        <Col>
            <Card
                title={food.name}
                style={{ width: 220, height: 300, margin: 16 }}
            >
                <img src={food.image} height={60} alt="food" />
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                    <b>Total Calories: {food.calories * food.servings} </b> kcal
                </p>
                <Button type="primary" onClick={() => props.deleteHandler(food.id)}> Delete </Button>
            </Card>
        </Col>
    );
}

export default FoodBox;