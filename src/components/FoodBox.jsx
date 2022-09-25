import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 340, margin: 10 }}
      >
       
        <img src={props.food.image} height={60} alt="food" />
       
       
        <p> <br/>Calories:{props.food.calories} </p>
      
        <p>Servings: {props.food.servings}</p>
        <p> 
          <b> Total Calories: {props.food.calories * props.food.servings} </b> kcal
        </p>
        
        <Button onClick={()=>props.deleteFood(props.food.name)} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;