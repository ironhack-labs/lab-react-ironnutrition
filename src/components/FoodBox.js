import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const {name, calories, servings, image} = props.food
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {servings * calories} </b> kcal
        </p>
        <Button
          type="primary"
          onClick={() => {
            props.callbackToDelete(name);
          }}
        >
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
