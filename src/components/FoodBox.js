import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodBox(props) {
  const foods = props.foods;
  return (
    <div key={(foods.name + foods.calories).trim()}>
      <Col>
        <Card
          title={foods.name}
          style={{ width: 230, height: 320, margin: 10 }}
        >
          <img src={foods.image} alt="foods" height={60} />

          <p>Calories: {foods.calories}</p>

          <p>Servings: {foods.servings}</p>

          <p>
            <b>Total calories: {foods.servings * foods.calories}</b>
          </p>
          <Button type="primary" onClick={() => props.deleteFood(foods.name)}>
            Delete
          </Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;
