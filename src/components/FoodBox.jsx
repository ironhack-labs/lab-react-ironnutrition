
import { Card, Button, Col } from 'antd';

function FoodBox({ food }) {
  const { name, image, calories, servings } = food;
  const totalCalories = servings * calories;

  return (
    <Col span={8}>
      <Card
        title={name}
        cover={<img alt={name} src={image} style={{ height: 150, objectFit: 'cover' }} />}
        actions={[<Button type="primary">Delete</Button>]}
      >
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories}</b> kcal
        </p>
      </Card>
    </Col>
  );
}

export default FoodBox;
