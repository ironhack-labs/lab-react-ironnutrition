import React from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

const FoodBox = ({ food, onDelete }) => {
  const { name, image, calories, servings } = food;

  const handleDelete = () => {
    onDelete(food);
  };

  return (
    <Card
      hoverable
      style={{ width: 240, margin: '16px' }}
      cover={<img alt={name} src={image} />}
    >
      <Meta title={name} description={`Calories: ${calories}`} />
      <div style={{ marginTop: '16px' }}>
        <p>Servings: {servings}</p>
        <Button type="primary" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default FoodBox;
