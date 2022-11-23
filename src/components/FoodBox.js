import { Card, Col, Button } from 'antd';
import './FoodBox.css'

const FoodBox = (props) => {
  const { food } = props
  return ( 
    <Col>
      <Card 
        title={ food.name }
        style={{ width: 230, margin: 10, textAlign: 'left'}}
      >
        <img src={ food.image } alt="Food" height={60} />
        <p>Calories: { food.calories }</p>
        <p>Servings: <b>{ food.servings }</b></p>
        <p>
          <b>Total Calories: { food.calories * food.servings }</b> kcal
        </p>
        <Button className='card' type="primary">Delete</Button>
      </Card>
    </Col>
   );
}

export default FoodBox;