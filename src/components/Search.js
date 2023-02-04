import React, {  useState } from 'react';
import { Input } from 'antd';

const Search = (props) => {
  const { searchFN } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    searchFN(e.target.value);
  }

  return (
    <div className='searc'>
      <label>Search</label>
      <Input value={searchTerm} onChange={handleSearch}/>
      <label>Food List</label>
    </div>
  )
}
export default Search;