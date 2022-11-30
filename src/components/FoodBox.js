import { Card, Col, Button } from 'antd';

function FoodBox(props) {
    const { food } = props;
    return (
        <Col>
            <Card
                title={food.name}
                style={{ width: 230, height: 400, margin: 10 }}>
                <img src={food.image} height={60} />
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>Total Calories: {food.calories * food.servings} kcal</p>
                <Button onClick = {() => props.deleteFood(food.name)} type="primary">DELETE</Button>
            </Card>
        </Col>
    )
}

export default FoodBox;