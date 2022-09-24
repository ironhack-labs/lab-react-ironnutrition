import { Card, Col, Button } from 'antd';

function FoodBox({ food }) {
  return (
    <div>
      <Col>
        <Card
          title={food.name}
          style={{
            justifyContent: 'flex-start',
            width: 300,
            height: 300,
            margin: 10,
          }}
        >
          <img src={food.image} height={60} alt="food"></img>
          <p>Calories:{food.calories}</p>
          <p>Servings:{food.servings}</p>
          <p>Total Calories:{food.calories * food.servings}</p>
          <Button>Delete</Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;
