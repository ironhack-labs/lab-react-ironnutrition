import { Divider, Input } from 'antd';

import React, { useState } from 'react';

const Search = (props) => {
  const { getFoodSearch } = props;
  const [search, setSearch] = useState('');
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    getFoodSearch(value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label style={{ display: 'block' }}>Search</label>
      <Input
        value={search}
        type="text"
        onChange={handleInputChange}
        style={{ width: '75%', margin: '0 auto 10px auto' }}
      />
    </>
  );
};

export default Search;