import React from "react";
import { Row, Col } from 'antd'
import FoodCard from "../FoodCard/FoodCard";

function FoodList({foods, onDeleteFood}) {

    return (
            <Row align="center">
                {foods.map(food => (
                    <Col align="center" span={6}  key={food.name}>
                        <FoodCard onDelete={() => onDeleteFood(food.name)}  {...food}
                        />
                    </Col>
                    ))}
            </Row> 
    )
}

export default FoodList 