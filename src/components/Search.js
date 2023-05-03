import { Divider, Input } from 'antd';
import { useState } from 'react';
import FoodsJSON from "../foods.json"

// Iteration 5
function Search(props) {
  const [searchWord, setSearchWord] = useState("");

  const handleSelect = (e) => {
    var inputSearch = e.target.value.toLowerCase()
    setSearchWord(inputSearch);
    props.search(inputSearch);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchWord} type="text" onChange={handleSelect} />
    </>
  );
}

export default Search;
