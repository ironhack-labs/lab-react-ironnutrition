// Your code here
import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodBox(props) {
    return (
        <Col>
            <Card title={props.food.name} style={{ width: 230, height: 300, margin: 10 }}>
                <img src={props.food.image} alt="Food picture" height={60} />
                <p>Calories: {props.food.calories}</p>
                <p>Servings {props.food.servings}</p>
                <p>
                    <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
                </p>
                <button onClick={() => props.deleteFunction(props.food.id)}>Delete</button>
            </Card>
        </Col>
    );
}

export default FoodBox;