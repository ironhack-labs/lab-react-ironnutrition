import './FoodBox.css'
import { Card, Col, Button } from 'antd';

function FoodBox({ calories, id, image, name, servings, handleDeleteFood}) {
  
  const handleClick = () => {
    return handleDeleteFood(id);
  }

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt='Food image' />
        <p>Calories: {calories}</p>
        <p>Servings: <b>{servings}</b></p>
        <p><b>Total Calories: {servings * calories}</b> kcal</p>
        <Button type='primary' onClick={handleClick}> Delete </Button>
      </Card>
    </Col>

  );
}

export default FoodBox;