import { useState } from 'react'
import React from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function Search(props) {

    const {searchResults} = props;

    const [search, setSearch] = useState('')

    const handleSearch = (e) => 
    {setSearch(e.target.value)
    searchResults(e.target.value)}

  return (
    <div>
        <label htmlFor="search">Search</label>
      <Input type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  )
}

export default Search