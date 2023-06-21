import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  function deleteFood() {
    props.onDelete(props.food.name);
  }
  return (
    <Col>
      <Card
        key={props.index}
        title={props.food.name}
        style={{ width: 350, height: 400, margin: 10 }}
      >
        <img src={props.food.image} height={150} alt="food" />
        <p>
          <b>Calories:</b> {props.food.calories}
        </p>
        <p>
          <b>Servings:</b> {props.food.servings}
        </p>
        <p>
          <b>Total Calories:</b> {props.food.calories * props.food.servings}
          kcal
        </p>
        <Button
          type="primary"
          style={{ background: 'red' }}
          onClick={deleteFood}
        >
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
