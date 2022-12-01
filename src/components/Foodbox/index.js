import React from 'react';
import { Button, Card, Col, } from 'antd';

const Foodbox = (props) => {
  const { name, calories, image, servings, deleteFood, index } = props;
  return (
    <Col>
      <Card style={{width:230}} title={name}>
        <img src={image} width={100} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <strong>Total calories: {calories * servings}</strong> 
        <Button type="primary" onClick={()=>deleteFood(index)}> Delete </Button>
      </Card>
    </Col>
  );
};
export default Foodbox;
