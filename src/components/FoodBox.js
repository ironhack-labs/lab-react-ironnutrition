import { Card, Col, Button } from "antd";


function FoodBox({food, deleteFood}){
  return(
    <Col>
      <Card
        title={food.name}
        style={{ width: 200, height: 300, margin: 5 }}
      >
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(food.name)}> Delete </Button>
      </Card>
    </Col>
  )
}
export default FoodBox