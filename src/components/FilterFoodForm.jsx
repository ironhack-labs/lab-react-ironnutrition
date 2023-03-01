import React from 'react';
import { Input } from 'antd';

export default function FilterFoodForm({ filterFoods }) {
  const handleFilterFoods = (e) => {
    filterFoods(e.target.value);
  };
  return (
    <>
      <h2>Filter Foods</h2>
      <Input onChange={handleFilterFoods}></Input>
    </>
  );
}
