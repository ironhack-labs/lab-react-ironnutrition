// Your code here

import { Card, Col, Button } from "antd";

function FoodBox (props){

    const {food} = props;
    const {clickToDelete} = props;
    
    return (
        <Col>
          <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
            <img src={food.image} height={60} alt={food.name} />
            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>
            <p>
              <b>Total Calories: {food.servings * food.calories}</b> kcal
            </p>
            <Button type="primary" onClick={()=> clickToDelete(food.id)}> Delete </Button>
          </Card>
        </Col>
      );
    }
    
    export default FoodBox;
    