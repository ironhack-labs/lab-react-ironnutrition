import { Divider, Input } from 'antd';

import { useState } from 'react';

function Search({ onSearchFood }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInput = (searchQuery) => {
    setSearchQuery(searchQuery);

    onSearchFood(searchQuery);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={searchQuery}
        type="text"
        onChange={(event) => {
          handleSearchInput(event.target.value);
        }}
      />
    </>
  );
}

export default Search;
