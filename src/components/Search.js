import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {

  return (
    <form>
      <Divider className='divider'>Search</Divider>

      <label>Search</label>
      <Input value={props.searchQuery} type="text" onChange={(e) => {props.setSearchQuery(e.target.value)}} />
    </form>
  );
}

export default Search;