import { Card, Button } from "antd";

function FoodBox(props) {
    return (
        <Card title={props.name}>
            <img src={props.image} width={60} />
            <p>Calories: {props.calories}</p>
            <p>Servings: {props.servings}</p>
            <p><bold>Total calories: {props.calories}</bold> kcal</p>
            <Button type="primary" onClick={() => props.delete(props.name)}>Delete</Button>
        </Card>
    );
}

export default FoodBox;
