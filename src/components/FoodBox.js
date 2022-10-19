import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({details, callbackToDelete}) {
  return (
    <Col>
      <Card
        title={details.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={details.image} height={60} alt={details.name} />
        <p>Calories: {details.calories}</p>
        <p>Servings: {details.servings}</p>
        <p>
          <b>Total Calories: {details.calories * details.servings} </b> kcal
        </p>
        <Button 
          type="danger"
          onClick={()=>{callbackToDelete(details.name)}}
        > Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
