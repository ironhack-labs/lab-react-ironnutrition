import { Button, Card, Col } from 'antd';

export function FoodBox({ food, handleClickDelete }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>{food.calories}</p>
        <p>{food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button onClick={handleClickDelete} type="primary">
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}
