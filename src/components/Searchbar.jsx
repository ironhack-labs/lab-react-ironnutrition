import { Divider, Input } from 'antd';
import { useState } from 'react';

function Searchbar({filterFoods}) {
    const[query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value);
        filterFoods(e.target.value);
    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={query} type="text" onChange={handleQuery} />
    </>
  );
}

export default Searchbar;