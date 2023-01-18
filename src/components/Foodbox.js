import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({foodItem}) {
  return (
    <Col>
      <Card
        title={foodItem.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={foodItem.image} height={60} alt="food" />
        <p>Calories: {foodItem.calories}</p>
        <p>Servings: {foodItem.servings}</p>
        <p>
          <b>Total Calories: {foodItem.calories} * {foodItem.servings} </b> kcal
        </p>
      </Card>
    </Col>
  );
}
// <Button type="primary"> Delete </Button>
export default FoodBox;