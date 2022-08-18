import { Card, Col, Button, Row } from 'antd';

function FoodBox(props) {
  const { foodProps } = props;
  return (
    <Col>
      <Card
        title={foodProps.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={foodProps.image} height={60} alt="foodProps" />
        <p>Calories: {foodProps.calories}</p>
        <p>Servings: {foodProps.servings}</p>
        {/* <p>
                <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </b> kcal
              </p> */}
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
