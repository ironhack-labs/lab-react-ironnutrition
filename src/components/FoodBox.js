import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const defaultImage =
    'https://images.unsplash.com/photo-1517765808589-729a992ea0ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

  const handleDelete = () => {
    props.onDeleteFood(props.food.name);
  };

  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 400, margin: 10 }}
      >
        <img src={props.food.image || defaultImage} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b>{' '}
          kcal
        </p>
        <Button type="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
