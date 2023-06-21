import React, { useState } from 'react';
import { Input, Divider } from 'antd';

const Search = (props) => {
  console.log("give me something" + props);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    props.onSearch(searchQuery);
  };

  return (
    <div>
      <Divider>Search</Divider>

      <Input
        placeholder="Search food..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
