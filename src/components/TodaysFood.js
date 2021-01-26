import React from 'react';
import { Col } from 'antd';

const TodaysFood = ({ name, calories, quantity }) => {
  return (
    <Col span={12}>
      <div>
        <h1>{name} </h1>
        <p>Total: {calories} cal</p>
      </div>
    </Col>
  );
};

export default TodaysFood;
