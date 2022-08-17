import { Divider, Input } from 'antd';
import {useState} from 'react'

function Search(props) {
    const {searchResults} = props;

    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        setSearch(e.target.value);
        searchResults(e.target.value);
    }

  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor='search'>Search</label>
      <Input value={search} type="text" name="search" onChange={handleSearch} />
    </>
  );
}

export default Search;