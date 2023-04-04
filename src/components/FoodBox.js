import { Card, Col, Button } from 'antd';

// Iteration 2
const FoodBox = ({ food: { name, calories, image, servings } }) => {
  return (
    <Col>
      <Card
        className="box"
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
