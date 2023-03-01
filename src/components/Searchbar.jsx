import React, {useState} from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Searchbar({searchFood}) {

    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        setSearch(e.target.value)
        searchFood(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSearch} />
    </>
  );
}

export default Searchbar;