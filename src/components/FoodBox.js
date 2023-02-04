import React from 'react';
import { Button, Card, Col } from 'antd';

const FoodBox = (props) => {
  const { food, deleteFood, index } = props;
  const {name, calories, image, servings} = food; 
  
  return (
    <div>
      <Card title={name} style={{width: "330px", height: "330px"}}>
        <img src={image} alt={name} style={{width: "100px", height:"100px", objectFit:"contain"}}/>
        <p><strong>Servings: </strong> {servings}</p>
        <p><strong>Total Calories: </strong>{calories}kcal</p>
        <Button type='primary' onClick={() => deleteFood(index)}>Delete</Button>
      </Card>
    </div>
  )
}
export default FoodBox;