import { useState } from 'react';

import { Divider, Input } from 'antd';

// Iteration 5
function Search({searchFood}) {

    const [str, setStr] = useState("")

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input 
        value={str} 
        type="text" 
        onChange={(e) => {
            setStr(e.target.value)
            searchFood(e.target.value)
        }} />
    </>
  );
}

export default Search;
