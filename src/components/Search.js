import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  const [value, setValue] = useState(' ');

  const handleSearched = (event) => {
    setValue(event.target.value);
    props.filterFoods(event.target.value);
    // console.log('target.value: ', event.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={value} type="text" onChange={handleSearched} />

      {console.log(value)}
    </>
  );
}

export default Search;
