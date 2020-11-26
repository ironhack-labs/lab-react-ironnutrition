import React from 'react';
import { List, Avatar } from 'antd';

const UserList = ({ data }) => {
  return (
    <div>
      <h1>Items</h1>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={[<p>Quantity: {item.quantity}</p>]}>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={`${item.calories} cal.`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default UserList;
