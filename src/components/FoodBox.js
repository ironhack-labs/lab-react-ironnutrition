import { Card, Col, Button } from 'antd';



function FoodBox(props) {

    // console.log("this is props name", props.foodDetails[0].name)
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 340, margin: 10 }}
      >
        <img src={props.food.image} height={70} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;