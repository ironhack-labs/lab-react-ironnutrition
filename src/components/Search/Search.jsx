import React from 'react'
import { Input } from 'antd'

const Search = ({handleSearch}) => (
    <Input placeholder='Search' name='search' onChange={handleSearch}/>
  )

export default Search
