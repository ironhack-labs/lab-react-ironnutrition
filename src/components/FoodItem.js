import React, { useState } from 'react';
import { List, Avatar, Button, InputNumber } from 'antd';

const FoodItem = ({ item, HandlerAddQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  const onNumberChange = (value) => {
    setQuantity(value);
  };

  return (
    <List.Item
      actions={[
        <InputNumber min={1} value={quantity} onChange={onNumberChange} />,
        <Button
          type="primary"
          onClick={() => HandlerAddQuantity({ ...item, quantity })}
        >
          +
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={item.image} alt={item.name} size="large" />}
        title={item.name}
        description={`${item.calories} cal.`}
      />
    </List.Item>
  );
};

export default FoodItem;
