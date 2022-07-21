import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {

  const { foods, deleteFood } = props;
console.log(deleteFood)
  return (
    <>
{foods.map(meal => {  
  return (
<div className="Card">
    <Col>
      <Card
        title={meal.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
         <img src={meal.image} height={60} alt="food" />
        <p>Calories: {meal.calories}</p>
        <p>Servings: {meal.servings}</p>
        <p>
          <b>Total Calories: {meal.calories * meal.servings} </b> kcal
        </p> 
        <Button type="primary" onClick={() => {
          
        console.log('It works', meal, meal.name)
          
          deleteFood(meal.name)}}> Delete </Button>
      </Card>
    </Col> 
    </div>
  )
})}
</> 
  );
}

export default FoodBox;
