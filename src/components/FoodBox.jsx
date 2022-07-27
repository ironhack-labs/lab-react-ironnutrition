import { Card, Col, Button } from 'antd';

// Iteration 2 name image calories servings
function FoodBox(props , foods , handleDelete) {
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories} </p>
        <p>Servings: {props.food.servings} </p>
        <p>
          <b>Total Calories: { props.food.calories * props.food.servings }</b> kcal
        </p>
        <Button type="primary" onClick={() => props.handleDelete(props.food.name)} > Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
