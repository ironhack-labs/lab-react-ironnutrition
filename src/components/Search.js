import { Divider, Input } from 'antd';
import { useState } from 'react'

// Iteration 5
function Search({filterFoods}) {
    const [ searchedWord, setsearchedWord] = useState("")

    const handleSelect = (e) => {
        setsearchedWord(e.target.value)
        filterFoods(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchedWord} type="text" onChange={handleSelect} />
    </>
  );
}

export default Search;