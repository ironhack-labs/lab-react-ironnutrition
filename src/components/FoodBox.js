import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const { food, deleteFood } = props
    const { foodToDelete } = props
    return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(food)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;






