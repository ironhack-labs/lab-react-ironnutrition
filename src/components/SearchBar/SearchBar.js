import React from 'react'
import { Divider, Input } from 'antd';

function SearchBar({ search, onSearch }) {

  const handleSearch = (ev) => {
    onSearch(ev.target.value)
  }

  return (
    <>
      <Divider>Search</Divider>

      <label className='p-3'>Search</label>
      <Input value={search} type="text" onChange={handleSearch} className='mx-3'/>
    </>
  )
}

export default SearchBar