import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodBox(props) {
    return (
        <Col>
            <Card
                title={props.food.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={props.food.image} height={60} alt="food" />
                <p>Calories: {props.food.calories}</p>
                <p>Servings: {props.food.servings}</p>
                <p>
                    {/* We wanted to user Number() to convert the object to a number, but it was not working here */}
                    <b>Total Calories: {props.food.calories} * {props.food.servings} </b> kcal
                </p>
                <Button type="primary"> Delete </Button>
            </Card>
        </Col>
    );
}

export default FoodBox;