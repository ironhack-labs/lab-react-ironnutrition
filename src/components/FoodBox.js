import React, { useState } from 'react';
import { List, Input } from 'antd';
import FoodItem from './FoodItem';
const { Search } = Input;

const FoodBox = ({ data, HandlerAddQuantity }) => {
  const [searchFood, setSearchFood] = useState({});
  const onSearch = (value) => {
    const searchString = new RegExp(value.toLowerCase().split(' ').join('|'));
    const search = data.filter((e) => searchString.test(e.name.toLowerCase()));
    setSearchFood(search);
  };
  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      {searchFood.length ? (
        <List
          itemLayout="horizontal"
          dataSource={searchFood}
          renderItem={(item) => (
            <FoodItem HandlerAddQuantity={HandlerAddQuantity} item={item} />
          )}
        />
      ) : (
        <> </>
      )}
    </>
  );
};

export default FoodBox;
