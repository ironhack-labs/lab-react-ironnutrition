import { Card, Col, Button } from 'antd';


function FoodBox (props) {
    const {food, deleteFood} = props;
    const {name, calories, image, servings} = food

    const multiplyNumbers = (num1, num2) => {
        return num1*num2
    }

  
    return (
        <Col>
        <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
            <img src={image} height={60} alt="food" />
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <p>
                <b>Total calories: {multiplyNumbers(calories, servings)}</b>
            </p>
            <Button type="primary" onClick= {(event) => {deleteFood(name)}}> Delete</Button>
        </Card>
        </Col>
    )
}

export default FoodBox;