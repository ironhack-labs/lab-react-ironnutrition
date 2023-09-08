import React, { useState } from 'react'
import { Input } from 'antd';

function SearchBar(props) {
  const [searchFood,setSearchFood] = useState('')

  const handleSearch = e => {
    setSearchFood(e.target.value)
    props.searchFood(e.target.value)
  }

  return (
    <div>
    <h3>Search</h3>
    <label> Search
    <Input value={searchFood} type="text" onChange={handleSearch} />
    </label>
    </div>
  )
}

export default SearchBar