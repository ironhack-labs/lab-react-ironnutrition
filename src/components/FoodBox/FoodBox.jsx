// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';
import React from 'react';
import './FoodBox.css'


// Iteration 2
function FoodBox({ food, handleDelete }) {
    return (
        <Col>
            <Card
                title={food.name}
                style={{ width: 230, height: 300, margin: 10 }}
                key={food.name}>

                <img src={food.image} height={60} alt={food.name} />
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                    <b>Total Calories: {food.calories * food.servings} </b> kcal
                </p>
                <Button type="primary" onClick={() => handleDelete(food.name)}> Delete </Button>
            </Card>

        </Col>
    );
}

export default FoodBox;
