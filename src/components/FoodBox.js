import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.foodItem.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.foodItem.image} height={60} alt={props.foodItem.name} />
        <p>Calories: {props.foodItem.calories}</p>
        <p>Servings: {props.foodItem.servings}</p>
        <p>
          <b>Total Calories: {props.foodItem.calories * props.foodItem.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
