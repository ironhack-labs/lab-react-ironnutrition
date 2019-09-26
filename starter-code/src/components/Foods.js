import React from 'react'
import { Row, Col, InputNumber, Button, Card } from 'antd'

function Foods({ name, calories, image, addSummary, updateQty }) {
  return (
    <Card
      hoverable
      style={{ width: 500 }}
      className="cards"
    >
      <Row type="flex" align="middle" justify="center">
        <Col span={6}>
          <img alt={name} src={image} title={name} width="90px" />
        </Col>
        <Col span={6}>
          <p>
            <strong>{name}</strong> <br />
            <small>{calories} cal</small>
          </p>
        </Col>
        <Col >
          <InputNumber
            className="input"
            type="number"
            defaultValue="0"
            min={0}
            onChange={(value) => updateQty(name, value)}
          />
        </Col>
        <Col >
          <Button onClick={() => addSummary(name)} type="primary" className="button is-info">
            +
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default Foods