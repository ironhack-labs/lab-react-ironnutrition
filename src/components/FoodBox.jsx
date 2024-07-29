import React from 'react';
import { Card, Col, Button } from "antd";

function FoodBox({ food, onDelete }) {
    return (
        <div className='food-box'>
        <Col>
            <h3>{food.name}</h3>

            <img src={food.image} alt={food.iamge} />

            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total Calories: {food.calories * food.servings}</b> kcal
            </p>

            <button onClick={() => onDelete(food.name)}>Delete</button>
        </Col>
        </div>
    );
}

export default FoodBox;
