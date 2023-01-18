import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
  const totalCalories = props.foodList.calories * props.foodList.servings
  
  return (
      <Card className ="card"
        title={props.foodList.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
      <img src={props.foodList.image} height={200} alt="food" />
        <p>Calories: {props.foodList.calories}</p>
        <p>Servings: {props.foodList.servings}</p>
        <p>
          <b>Total Calories: {totalCalories}</b> kcal
        </p>
      <Button type="primary" onClick={() => {
        props.callbackToDelete(props.foodList.name)
        }}> Delete </Button>
      </Card>
  );
}

export default FoodBox