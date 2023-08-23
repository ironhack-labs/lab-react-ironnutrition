import React from "react";
import { Card, Button, Col, InputNumber, Row } from "antd";

const FoodBox = ({ food, onDelete }) => {
  const { id, name, calories, image, servings } = food;

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <Card style={{ marginBottom: "16px" }}>
      <Row>
        <Col span={6}>
          <img src={image} alt={name} width={80} />
        </Col>
        <Col span={12}>
          <h3>{name}</h3>
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {servings * calories} kcal</b>
          </p>
        </Col>
        <Col span={6}>
          <InputNumber min={1} defaultValue={1} />
          <Button onClick={handleDeleteClick} type="danger">
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default FoodBox;
