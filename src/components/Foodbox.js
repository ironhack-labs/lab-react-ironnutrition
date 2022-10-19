import { Card, Col, Button } from 'antd';

function FoodBox({foodBox, callbackToDelete}) {
    return (
      <Col>
        <Card
          title={foodBox.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={foodBox.image} height={60} alt="food" />
          <p>Calories: {foodBox.calories}</p>
          <p>Servings: {foodBox.servings}</p>
          <p>
            <b>Total Calories: {foodBox.calories * foodBox.servings} </b> kcal
          </p>
          <Button type="primary" onClick={()=>{callbackToDelete(foodBox.name)}}> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;
  