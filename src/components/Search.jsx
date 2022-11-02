import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {

  const [searchInput, setSearchInput] = useState('')

  const handleChange = (event) => {
    setSearchInput(event.target.value)

    props.filterList(event.target.value)
  }


  
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchInput} type="text" onChange={handleChange} />
    </>
  );
}

export default Search;
