import React from 'react';
import { Card, Typography, InputNumber, Button, Row, Col, Image } from 'antd';

const { Title } = Typography;

export default function FoodBox({ textFood, imageFood, caloriesFood }) {
  return (
    <div>
      <Card
        style={{
          width: 400,
          margin: '10px',
        }}
      >
        <Row justify="space-between">
          <Col>
            <Image width={64} height={64} src={imageFood} />
          </Col>
          <Col>
            <div>
              <Title level={5}>{textFood}</Title>
              <p>{caloriesFood} cal</p>
            </div>
          </Col>
          <Col style={{ display: 'flex' }}>
            <InputNumber min={0} defaultValue={0} />
            <Button type="primary" style={{ height: '100%', width: '50%' }}>
              +
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
