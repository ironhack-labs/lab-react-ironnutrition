import React, { useState } from 'react';
import { List, Avatar, Button, InputNumber } from 'antd';

const FoodBox = ({ data, HandlerAddQuantity }) => {
  const [number, setNumber] = useState({
    value: 0,
  });

  const onNumberChange = (value) => {
    setNumber({ value });
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <InputNumber
              min={0}
              value={number.value}
              onChange={onNumberChange}
            />,
            <Button
              type="primary"
              onClick={() => HandlerAddQuantity(item.name)}
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
      )}
    />
  );
};

export default FoodBox;
