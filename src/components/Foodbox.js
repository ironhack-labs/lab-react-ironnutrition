import { Card, Col, Button } from 'antd';

function FoodBox(props) {

    const {food,deleteFood}=props
    
  return (
    <Col>
      <Card
        title={food.data.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.data.image} height={60} alt="food" />
        <p>Calories: {food.data.calories}</p>
        <p>Servings: {food.data.servings}</p>
        <p>
          <b>Total Calories: {food.data.calories * food.data.servings} </b> kcal
        </p>
        <Button type="primary" onClick={()=>deleteFood(food.data.name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
