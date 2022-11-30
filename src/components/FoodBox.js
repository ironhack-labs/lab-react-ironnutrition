import { Card, Col, Button } from 'antd';

function FoodBox(props){

    return (
        props.foodsList.map((food) => (
            
            <Col>
                <Card
                title={food.name}
                style={{ width:400, height:400, margin:5}}
                >
                    <img src={food.image} height={60} alt="food" />
                <p>Calories: { food.calories }</p>
                <p>Servings: { food.servings }</p>
                <p>
                    <b>Total calories: { food.calories * food.servings}</b> kcal
                </p>
                <Button type="primary"  onClick={()=>props.deleteFood(food.name)}>Delete</Button>
                </Card>
            </Col>
        )
        ))
}

export default FoodBox;