import { Card, Col, Button } from 'antd';

function FoodBox(props) {
    
  const { food, foods, setFoods } = props

  function handleClick() {
    const newFoods = foods.filter(element => element !== food)
    setFoods(newFoods)
  }

  return (
    
    <Col>
      <Card
        title={food.name}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={handleClick}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;