import { Card, Row, Col, Divider, Input, Button } from 'antd';
function FoodBox(props) {

  return (
    <div className='FoodBox'>
     {props.foodsArr.map((foodObj)=> {
      return(
        <Col>
          <Card title= {foodObj.name} style={{ width: 230, height: 300, margin: 10 }} >
            <img src={foodObj.image} height={60} alt="food" />
            <p>Calories:{foodObj.calories}</p>
            <p>Servings: {foodObj.servings}</p>
            <p>
              <b>Total Calories: {foodObj.calories * foodObj.servings} </b> kcal
            </p>
            <Button type="primary"> Delete </Button>
          </Card>
        </Col>
      )})}
    </div>
  )}


export default FoodBox;
