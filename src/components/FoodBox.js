import { Card, Typography, InputNumber, Button, Row, Col, Image } from 'antd';
import React, { useState } from 'react';

const { Title } = Typography;

function FoodBox(props) {
  const [newQuantity, setNewQuantity] = useState(1);

  function onChange(value) {
    setNewQuantity(value);
  }

  function handleClick(){
   setNewQuantity(newQuantity => newQuantity === 0 ? 1 : newQuantity)
   const {name, calories, setTodaysFoods} = props
   const objectToPush = {name, calories, quantity: newQuantity}
  //  setFoodsToMap((foodsToMap) => [...foodsToMap, { ...e, ...quant }]);
  setTodaysFoods(todaysFoods => [...todaysFoods, objectToPush])
  }

  return (
    <Card
      style={{
        width: 400,
        margin: '10px',
      }}
    >
      <Row justify="space-between">
        <Col >
          <Image width={64} height={64} src={props.image} />
        </Col>
        <Col >
          <div>
            <Title level={5}>{props.name}</Title>
            <p>{props.calories} cal</p>
          </div>
        </Col>
        <Col style={{ display: 'flex' }}>
          <InputNumber min={1} defaultValue={1} onChange={onChange} />
          <Button type="primary" style={{height: '100%', width: '50%'}} value={props.name} onClick={handleClick}>+</Button>
        </Col>
      </Row>
    </Card>
  );
}

export default FoodBox;
