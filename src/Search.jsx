import React from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
  const { value, onChange } = props;

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={value} type="text" onChange={handleInputChange} />
    </>
  );
}

export default Search;
