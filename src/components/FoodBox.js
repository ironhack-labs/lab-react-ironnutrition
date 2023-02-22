import { Card, Button } from 'antd';

function FoodBox(props) {
  return (
    <Card className="FoodBox">
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
      <p>Calories: {props.calories} kcal</p>
      <p>Servings: {props.servings}</p>
      <p>
        <strong>Total Calories: {props.servings * props.calories}</strong> kcal
      </p>
      <Button type="primary" onClick={() => props.deleteFood(props.name)}>
        Delete
      </Button>
    </Card>
  );
}

export default FoodBox;
