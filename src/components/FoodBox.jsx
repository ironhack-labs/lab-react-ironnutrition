import { Card, Col, Button } from "antd";

function FoodBox (props){
    let {food} = props

    return(
        food.map(food=>{
            return (
            <Card key={food.id} id="food-card">
                <Col>Name: {food.name}</Col>
                <img src={food.image} id="food-img"/>
                <Col>Calories: {food.calories}</Col>
                <Col>Servings: {food.servings}</Col>
                <Col>
                    <b>Total Calories: {food.servings* food.calories} kcal</b> 
                </Col>
                <Button onClick={()=>props.delete(food.id)}>Delete</Button>
            </Card>
            )
        })
        
    )
}

export default FoodBox