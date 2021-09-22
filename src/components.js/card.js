
import { Card, Col, Button } from "antd";

const FoodCard = (props)=>{

    const{name, image, calories, servings} = props.food
   

    return(
        <Col className="box">
            <Card
                
                title={name}
                style={{ width: 230, height: 400, margin: 10 }}
            >
                <img src={image} height={60}  alt=""/>
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>
                <b>Total Calories: {calories * servings} </b> kcal
                </p>
                <Button type="primary" onClick={()=>props.delete(name)}> Delete </Button>
            </Card>
        </Col>
    )
}

export default FoodCard