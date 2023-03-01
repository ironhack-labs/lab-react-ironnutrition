import { Card, Col, Button } from "antd";
import React from 'react'

function FoodBox(props) {
  return (
    <div>
   
    <Col>
    
        <Card 
        title={props.food.name} style= {{width: 220, height: 320, margin: 10}}>
        <img src={props.food.image} height={60} alt="food"/>
        <p>Calories: {props.food.calories}</p>
        <p>Servings: <b>{props.food.servings}</b></p>
        <p><b>Total Calories: {props.food.calories * props.food.servings}</b>kcal</p>
        
        <Button type="primary" onClick={()=> props.deleteFood(props.food.name)}> Delete</Button>
        </Card>
    </Col>
    </div>
  )
}

export default FoodBox