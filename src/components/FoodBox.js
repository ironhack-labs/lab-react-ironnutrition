import { Card, Col, Button } from 'antd';


function FoodBox(props) {
    return (
      <Col>
        <Card
          title={props.foodsDetails.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.foodsDetails.image} height={60} alt="food" />
          <p>Calories: {props.foodsDetails.calories}</p>
          <p>Servings: {props.foodsDetails.servings}</p>
          <p>
            <b>Total Calories: {props.foodsDetails.calories * props.foodsDetails.servings} </b> kcal
          </p>
          <Button type="primary"> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;