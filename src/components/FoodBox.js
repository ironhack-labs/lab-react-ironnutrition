import { Card, Row, Col, Divider, Input, Button } from 'antd';
function FoodBox(props) {

  return (
    <div className='FoodBox'>
     
        <Col>
          <Card title= {props.food.name} style={{ width: 230, height: 300, margin: 10 }} >
          {props.food.image ? (
            <img src={props.food.image} height={60} alt="food" />
          ) : (
            <img src="https://dummyimage.com/60x60/aaaaaa/000000" alt="food" />
          )}

            <p>Calories:{props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>
            <p>
              <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
            </p>
            <Button > <button onClick={() => {props.callbackToDelete(props.food.name)}}> Delete</button> </Button>
          </Card>
        </Col>
     
    </div>
  )}


export default FoodBox;
