import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.details.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.details.image} height={60} alt={props.details.name} />
        <p>Calories: {props.details.calories}</p>
        <p>Servings: {props.details.servings}</p>
        <p>
          <b>Total Calories: {props.details.calories * props.details.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
