import React, { useState } from 'react'
import { Divider, Input } from 'antd'

const Search = (props) => {
  const {searchFn} = props
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
    searchFn(event.target.value)
  }

  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchTerm} type="text" onChange={handleSearch} />
    </div>
  )
}

export default Search