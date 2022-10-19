// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({ callbackToSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const inputHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    callbackToSearch(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>
      <Input
        value={searchInput}
        type="text"
        onChange={(e) => {
          inputHandler(e);
        }}
        placeholder="Enter search query"
      />
    </>
  );
}

export default Search;
