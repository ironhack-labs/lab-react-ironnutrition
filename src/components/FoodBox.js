import { Card, Col, Button } from 'antd';



function FoodBox(props) {

  return (
    <Col>
      <Card
        title={props.foodDetails.name}
        style={{ width: 230, height: 340, margin: 10 }}
      >
        <img src={props.foodDetails.image} height={70} alt="food" />
        <p>Calories: {props.foodDetails.calories}</p>
        <p>Servings: {props.foodDetails.servings}</p>
        <p>
          <b>Total Calories: {props.foodDetails.calories * props.foodDetails.servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => {props.callbackToDelete(props.foodDetails.name)}}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;