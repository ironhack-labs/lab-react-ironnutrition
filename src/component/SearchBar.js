// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function SearchBar(props) {

  function handleChangeSearch(event) {
    const newVal = event.target.value
    props.setSearch(newVal)
  }



  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={props.search} type="text" onChange={handleChangeSearch} />
    </>
  );
}

export default SearchBar;