import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ food }) {
  const getKcal = (a, b) => {
    const sumValue = a + b;
    return sumValue;
  };
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <strong>
            Total Calories: {getKcal(food.calories, food.servings)} kcal
          </strong>
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
