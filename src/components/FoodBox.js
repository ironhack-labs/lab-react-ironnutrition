import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodBox(props){
    return (
        <Col>
          <Card
            title={props.foodDetails.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={props.foodDetails.image} height={60} alt="food" />
            <p>Calories: {props.foodDetails.calories}</p>
            <p>Servings: {props.foodDetails.servings}</p>
            <p>
              <b>Total Calories: {props.foodDetails.calories * props.foodDetails.servings} </b> kcal
            </p>
            <Button type="primary"> Delete </Button>
          </Card>
        </Col>
      );
    }
    export default FoodBox;
