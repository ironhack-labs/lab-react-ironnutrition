import { Card, Col,  Button } from "antd";

function FoodBox(props) {
  
  // function handleDelete() {
  //   props.delete()
  // }

  return(
    <Col>
      <Card 
        title={props.foods.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.foods.image} height={60} alt="food" />
      
        <p>Calories: {props.foods.calories}</p>
        <p>
          <b>Servings: {props.foods.servings}</b>
        </p>
        <Button type="primary" onClick={props.delete}> Delete </Button>
      </Card>
    </Col>
  )
}


export default FoodBox;