import { Card, Col, Button } from "antd";
function FoodBox(props){
return(
<div>
  <Col>
  <Card>
  <p>{props.food.name}</p>

  <img src={props.food.image} height={120} width={120}/>

  <p>Calories: {props.food.calories}</p>
  <p>Servings: {props.food.servings}</p>

  <p>
    <b>Total Calories: {props.food.servings * props.food.calories} </b> kcal
  </p>

  <Button   type="primary" onClick={() => { props.handleDelete(props.food.id)}}>Delete</Button>
  </Card>
  </Col>
</div>
)
}
export default FoodBox;