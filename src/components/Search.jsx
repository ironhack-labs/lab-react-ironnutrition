import { Divider, Input } from 'antd';
/* import {useState} from "react"; */

// Iteration 5
function Search({searchFoods}) {
    /* const [query, setQuery] = useState(""); */

    const handleQuery = (e) => {
        /* setQuery(e.target.value); */
        searchFoods(e.target.value);
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input /*value={query}*/ type="text" onChange={handleQuery} />
    </>
  );
}

export default Search;