// import { Card, Col, Button, Form } from 'antd';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {    
    return (
      <Col>
        <Card
          title={props.food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.food.image} height={60} alt="food" />
          <p>Calories: {props.food.calories}</p>
          <p>Servings: {props.food.servings}</p>
          <p>
            <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
          </p>
          
          {/*
          <Form onFinish={props.callbackDeleteFood}>
            <Button type="primary" htmlType="submit"> Delete </Button>
          </Form>
          */}
         
          <Button type="primary" danger htmlType="submit" onClick={props.callbackDeleteFood}> Delete </Button>
        </Card>
      </Col>);
  }
  
  export default FoodBox;