import React from "react";
import { Button, Card, Col,  } from "antd";

const FoodBox = (props) => {
const {name , calories , image , servings , deleteFood , index} = props
    return (
    <Col>
        <Card style={{width : 230  }}title={name}>
            <img src={image} width={100} alt={name}/>
            <p>Calories : {calories}</p>
            <p>Services : {servings}</p>
            <p><strong>Total Calories: {calories * servings} kcal</strong></p>
            <Button type='primary' onClick={()=>deleteFood(index)}>DELETE</Button>
        </Card>
    </Col>
    )
}

export default FoodBox