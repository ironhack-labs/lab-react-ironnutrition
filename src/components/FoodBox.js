import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 'auto', margin: 10 }}
      >
        <img src={props.food.image} alt={props.food.name} height={60} />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings}</b>{' '}
          kcal
        </p>
        <Button
          type="primary"
          onClick={() => {
            props.delFood(props.index);
          }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
