import React from 'react';
import { Button, Input, Divider } from 'antd';

function SearchBar(props) {
  const handleInputChange = (event) => {
    props.onSearch(event.target.value);
  };

  const handleButtonClick = () => {
    props.onSearch('');
  };

  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        type="text"
        placeholder="Search food"
        value={props.query}
        onChange={handleInputChange}
      />

      <Button onClick={handleButtonClick}>Clear</Button>
    </div>
  );
}

export default SearchBar;