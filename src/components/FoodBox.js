import { Card, Col, Button } from 'antd';

const FoodBox = (props) => {
  const { name, calories, image, servings } = props.food;
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food"></img>
        <p>Calories: {calories}</p>
        <p>
          <b>TotalCalories: {calories * servings}</b> kcal
        </p>
        <Button type="primary" onClick={() => props.deleteFood(name)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
