import { Card, Col, Button} from 'antd'

function BoxFood({ food, deleteFood }) {
  let totalCalories = food.calories * food.servings;

  return (
    <Col>
      <Card title={food.name}>
        <img src={food.image} width={150} height={100} alt="img" />
        <p>Calories: {food.calories} </p>
        <p>
          Servings: <b> {food.servings} </b>{' '}
        </p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button onClick={() => deleteFood(food.name)} type="primary">
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default BoxFood;
