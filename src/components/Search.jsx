import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
export default function Search(props) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        type="text"
        onChange={(e) => {
          const search = e.target.value.toLowerCase();
          props.handleSearchChange(search);
          props.setFiltered(search);
        }}
      />
    </>
  );
}
