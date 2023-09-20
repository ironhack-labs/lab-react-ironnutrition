import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  console.log("FoodBox Props:", props);
  const { food, deleteFood } = props;

  return (
    <Col> 
    <Card title={food.name} style={{ width: 230, height: 340, margin: 10 }}>
      <h4>Add Food</h4>
      <p>{food.name} </p>
      <img src={food.image} height={60} alt="food" />

      <p>Calories:{food.calories} </p>

      <p>Servings:{food.servings}</p>

      <p>
        <b>Total Calories: {food.calories * food.servings} </b> kcal
      </p>

      <Button type="primary" onClick={() => deleteFood(food.id)}>
        Delete 🗑️
      </Button>
    </Card>
    </Col>
  );
}

export default FoodBox;
