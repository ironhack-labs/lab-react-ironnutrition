import { Card, Col, Button } from 'antd';
import { useState } from 'react';

// Iteration 2
function FoodBox(eachFood) {
  const [food, setFood] = useState();
  const { name, calories, image, servings, _id } = eachFood.food;

  // console.log('_id de cima', _id);
  // console.log(eachFood.food._id);
  const handleDeleteFood = (event) => {
    // console.log(name);
    setFood(name);
    eachFood.deleteFood(name);
  };

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>
            Total Calories: {calories} * {servings}{' '}
          </b>{' '}
          kcal
        </p>
        <Button id={_id} type="primary" onClick={handleDeleteFood}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
