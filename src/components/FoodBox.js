import { Card, Row, Col, Button } from 'antd';

// Iteration 2
export const FoodBox = (props) => {
  return (
    <Row gutter={[16, 16]}>
      {props.food.map((food, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
          <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img
              src={food.image}
              height={60}
              alt="https://fakeimg.pl/350x200/?text=Problem?"
            />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
              <b>Total Calories: {food.calories * food.servings}</b> kcal
            </p>
            <Button type="primary">Delete</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
