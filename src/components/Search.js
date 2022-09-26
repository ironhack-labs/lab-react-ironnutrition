import { useState } from 'react';
import { Divider, Input } from 'antd';

function Search({ filterFoodList }) {
  const [search, setSearch] = useState('');

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={search}
        type="text"
        onChange={(event) => {
          setSearch(event.target.value.toLowerCase());
        }}
      />
      {filterFoodList(search)}
    </>
  );
}

export default Search;
