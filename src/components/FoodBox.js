// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
  return (
    <Col>
      <Card title={props.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={props.image} height={60} alt="food" />
        <p>Calories: {props.calories}</p>
        <p>Servings: {props.servings}</p>
        <p>
          <b>Total Calories: {props.calories * props.servings} </b> kcal
        </p>
        <Button
          type="primary"
          onClick={() => {
            props.callbackToDelete(props.name);
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
