import FoodCard from "../FoodCard/FoodCard"
import { Col, Row } from 'antd';
import React from 'react';
const style = {
  padding: '8px 0',
};

function FoodList ({foodList}) {
  return (
    <Row gutter={16}>
      { foodList.map( dish => {
        return ( 
          <Col className="gutter-row" span={6}  key={dish.image}>
            <div style={style}>
              <FoodCard {...dish}/>
            </div>
          </Col>        
        )
      })}
    </Row>
  )
}

export default FoodList