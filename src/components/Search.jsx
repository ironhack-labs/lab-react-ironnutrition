import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function Search(props) {
  const [search, setSearch] = useState('');
  const { searchFood } = props;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchFood(e.target.value);
  };

  return (
    <div>
      <>
        <Divider>Search a Food</Divider>

        <Input value={search} type="text" onChange={handleSearch} />
      </>
    </div>
  );
}

export default Search;
