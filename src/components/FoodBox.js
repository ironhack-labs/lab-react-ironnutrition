import { Card, Col, Button } from 'antd';

const FoodBox = (props) => {

    const handleDeleteClicked = () => {
        props.handleDelete(props.foodObj);
    }

    return (
        <Col>
            <Card
                title={props.foodObj.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={props.foodObj.image} height={60} alt="food" />
                <p>Calories: {props.foodObj.calories}</p>
                <p>Servings: {props.foodObj.servings}</p>
                <p>
                    <b>Total Calories: {props.foodObj.calories * props.foodObj.servings} kcal </b>
                </p>
                <Button type="primary" danger style={{ marginTop: '10px' }} onClick={handleDeleteClicked}> Delete </Button>
            </Card>
        </Col>
    )
};

export default FoodBox;