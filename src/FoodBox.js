import { Card, Col, Button } from 'antd';

function FoodBox(props){
    console.log(props);

    return(
        props.foods.map((food) => (
            <Col>
                <Card
                    title={food.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                >

                    <img src={food.image} height={60} alt="food" />
                    <p>Calories: {food.calories}</p>
                    <p>Servings: {food.servings}</p>
                    <p>
                        <b>Total Calories: {food.calories * food.servings} </b> kcal
                    </p>
                    <Button type="primary" onClick={()=>props.deleteFood(food.name)}> Delete </Button>
                </Card>
            </Col>
        ))
       
    )
}

export default FoodBox;