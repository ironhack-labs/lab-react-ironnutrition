import { useState } from 'react';
import { Input } from 'antd';

function Search(props) {

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchValue(searchQuery);
    props.searchFilter(searchQuery);
  }

  return (
    <label>
      Search:
      <Input type="text" value={searchValue} onChange={handleSearch} />
    </label>
  )
}

export default Search;
