import { Card, Col, Button } from 'antd';
// Iteration 2
function FoodBox({ foods }) {
  console.log({ foods });
  return (
    <Col>
      <Card title={foods.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={foods.image} height={60} alt={foods.name} />
        <p>Calories: {foods.calories}</p>
        <p>Servings: {foods.servings}</p>
        <p>
          <b>Total Calories: {foods.calories * foods.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
