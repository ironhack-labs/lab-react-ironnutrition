import { Divider, Input } from 'antd';
import { useState } from "react"

// Iteration 5
function Search(props) {
    const[search , setSearch] = useState("")
    const handleSearch = (e) => {
        setSearch(e.target.value)
        props.filter(e.target.value)
    }

  

  return (
    <>
      <Divider>Search</Divider>

      <label>Search:</label>
      <Input value={search} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
