import { Card, Col, Button } from 'antd';

const FoodBox = ({ food, removeFood }) => {
  return (
    <Col>
      <Card title={food.name} className="card">
        <div className="inter-card">
          <div className="img">
            <img src={food.image} alt="food" />
          </div>
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings} </p>
          <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
          <Button type="primary" onClick={() => removeFood(food.name)}>
            Delete
          </Button>
        </div>
      </Card>
    </Col>
  );
};

export default FoodBox;
