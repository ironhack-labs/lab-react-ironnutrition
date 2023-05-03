import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({food}) {
  const totalCalories = (calories, servings) => {
    return calories*servings
  }

  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.servings}</p>
        <p>Servings: {food.calories}</p>
        <p>
          <b>Total Calories: {totalCalories(food.calories, food.servings)} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
