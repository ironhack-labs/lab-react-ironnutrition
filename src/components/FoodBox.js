import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  return (
    <Col>
      <Card
        key={props.index}
        title={props.foodie.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.foodie.image} height={60} alt="food" />
        <p>Calories: {props.foodie.calories}</p>
        <p>Servings: {props.foodie.servings}</p>
        <p>
          <b>Total Calories: {props.foodie.calories * props.foodie.servings}</b>
          kcal
        </p>

        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            props.callbackDelete(props.foodie.name);
          }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
