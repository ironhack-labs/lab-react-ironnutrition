import { Card, Col, Button } from 'antd';

//Iteration 2

function FoodBox(food) {

  return (
    <Col>
      <Card
        title={food.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.food.image} height={60} alt="food" />
        <p>Calories: {food.food.calories}</p>
        <p>Servings: {food.food.servings}</p>
        <p>
          <b>Total Calories: {food.food.calories * food.food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  ); 
}

export default FoodBox;