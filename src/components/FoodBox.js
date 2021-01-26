import React from 'react';
import { Col, Card } from 'antd';
import { Button } from 'antd';

const { Meta } = Card;

const FoodBox = ({ name, calories, image, quantity }) => {
  return (
    <Col span={12}>
      <Card
        className="FoodCard"
        hoverable
        style={{
          width: '100%',
          height: 200, 
          display: 'flex',
          flexDirection: 'row',
        }}
        cover={
          <img
            alt={name}
            src={image}
            style={{ height: '100%', width: 300, objectFit: 'cover' }}
          />
        }
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxHeight: 100,
          }}
        >
          <Meta title={name} description={<p>{calories} cal </p>} />
          <p>{quantity}</p>
        </div>
        <div
          style={{
            paddingLeft: 600,
            height: 150
          }}
        >
          <Button type="primary">+</Button>
        </div>
      </Card>
    </Col>
  );
};

export default FoodBox;
