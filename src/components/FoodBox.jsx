import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  return (
    <Col>
      <Card className="food-box" title={props.food.name}>
        <img src={props.food.image} height={60} alt={props.food.name} />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b>{' '}
          kcal
        </p>
        <Button onClick={() => props.onDelete(props.food.name)}>Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
