import { Card, Row, Col, Divider, Input, Button } from 'antd';
function FoodBox(props) {
    console.log(props);
  return (
    <div>
     
        <Col>
          <Card>
           <p>{props.food.name} </p> 
            <img src={props.food.image} height={60} alt="food" />
            <p>Calories:{props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>
            <p>
              <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
            </p>
            <Button type="primary"> Delete </Button>
          </Card>
        </Col>

    </div>
  );
}

export default FoodBox;
