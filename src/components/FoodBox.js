import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ food }) {
  const totalCalories = food.calories * food.servings;

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>
          Calories: <span>{food.calories}</span>
        </p>
        <p>
          Servings: <span>{food.servings}</span>
        </p>
        <p>
          <b>Total Calories: {totalCalories}kcal</b>
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;

// function FoodBox ({food}) {

// }
