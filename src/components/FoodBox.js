
// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const {
        name,
        calories,
        image,
        servings
    } = props.food

    return (
        <Col span={8}>
            <Card
                title={name}
                style={{ width: 400, height: 500, margin: 10 }}
            >
                <img src={image} height={60} alt="food" />
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>
                    <b>Total Calories: {calories * servings} </b> kcal
                </p>
                <Button onClick={() => props.handleDeleteMovie(name)} type="primary"> Delete </Button>
            </Card>
        </Col>

    );
}

export default FoodBox;