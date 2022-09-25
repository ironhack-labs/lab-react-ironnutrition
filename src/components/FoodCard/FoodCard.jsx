import React from "react";
import { Card, Button } from 'antd';
import "./FoodCard.css"


function FoodCard({ name, calories, image, servings, onDelete}) {

    return (
        <div className="order">
            <Card style={{ width: 240 }}>
                <h2>{name}</h2>
                <img alt={name} src={image} width="180px"/>
                <p><strong>Calories:</strong> {calories}</p>
                <p><strong>Servings: </strong> {servings}</p>
                <Button className="buttonFormat" onClick={onDelete}>Delete</Button>
            </Card>
        </div>
    )  
}

export default FoodCard