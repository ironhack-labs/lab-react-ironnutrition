import { Card, Col, Button } from 'antd';
import DeleteButton from '../DeleteButton';

function FoodBox({name, image, calories, servings, onDelete}) {
const totalCalories = calories*servings
    
return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <DeleteButton name={name} onClick={onDelete}/>
      </Card>
    </Col>
  );
}

export default FoodBox;
