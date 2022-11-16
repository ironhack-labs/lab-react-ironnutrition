import { Divider, Input } from 'antd';
import {useState} from 'react';

// Iteration 5
function Search({filterFood}) {

    const [query, setQuery] = useState("");

    const handleQuery = (e) => {
        setQuery(e.target.value);
        filterFood(e.target.value);
      };

     

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={query} type="text" onChange={handleQuery} />
    </>
  );
}

export default Search;