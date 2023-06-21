import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.foodDetails.name}
        style={{ width: 230, height: 320, margin: 10 }}
      >
        <img src={props.foodDetails.image} height={60} alt="food" />
        <p>Calories: {props.foodDetails.calories}</p>
        <p>
          Servings: <strong>{props.foodDetails.servings}</strong>
        </p>
        <p>
          <strong>
            Total Calories: {props.foodDetails.calories * props.foodDetails.servings}
          </strong>{' '}
          kcal{' '}
        </p>
        <Button type="primary" onClick={()=>{
            props.callBackToDelete()
        }}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
