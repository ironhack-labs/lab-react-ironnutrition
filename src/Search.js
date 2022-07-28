import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  const [filter, setFilter] = useState()
  function handleSubmit(e){
    setFilter(e.target.value)
    props.callbackSearch(e.target.value)
  }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={filter} type="text" onChange={handleSubmit} />
    </>
  );
}

export default Search;