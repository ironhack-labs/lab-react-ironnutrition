import { Card, Col, Button, Row } from 'antd';

function FoodBox({ food, callbackToDelete }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button
          type="danger"
          onClick={() => {
            callbackToDelete(food.name);
          }}
        >
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
