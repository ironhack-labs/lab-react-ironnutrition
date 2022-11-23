import React, { useState } from 'react';
import { Input } from 'antd';

const Search = (props) => {
  const { searchFoods } = props
  const [search, setSearch] = useState("")

  const handleSearch = e => {
    setSearch(e.target.value)
    searchFoods(e.target.value)
  }

  return ( 
    <div className="searchfood">
      <Input 
        size='large'
        type="text"
        placeholder='Enter search query'
        value={search}
        onChange={handleSearch} />
    </div>
   );
}
 
export default Search;