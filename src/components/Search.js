
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {

const [query, setQuery] = useState("")

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={query} type="text" style={{ width: 150, height: 20, margin: 10 }} placeholder="Search by Name" onChange={(e) => {const content = e.target.value;
      setQuery(content);
      props.filter(content)}}/>
    </>
  );
}

export default Search;
