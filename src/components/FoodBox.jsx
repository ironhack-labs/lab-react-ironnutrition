import { Card, Col, Button } from "antd";

function FoodBox(props) {
  return (
    <Col>
    <Card title={props.name} style={{ width: 230, height: 300, margin: 10 }}>

      <img src={props.image} height={60} alt="food" />

      <p>Calories: {props.calories}</p>
      <p>Servings {props.servings}</p>

      <p>
        <b>
          Total Calories: {props.servings} * {props.calories}{" "}
        </b>{" "}
        kcal
      </p>
   
      <Button type="primary" onClick={function(){
        props.cbDeleteFood(props.id)
      }} >Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
