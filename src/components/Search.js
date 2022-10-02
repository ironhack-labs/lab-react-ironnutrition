import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({ onSearchFood }) {
  let [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={searchTerm}
        type="text"
        onChange={({ target: { value } }) => {
          setSearchTerm(value);
          onSearchFood(value);
        }}
      />
    </>
  );
}

export default Search;
