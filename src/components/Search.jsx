import { Input } from 'antd'
import React from 'react'

function Search({ style, onSearch}) {


  const handleSearchChange = (searching) => {
    const { value } = searching.target;
    onSearch(value)
  }

  return (
      <Input 
        type='text' 
        style={style} 
        name='search'
        placeholder='search food'
        onChange={handleSearchChange}
      />
  )
}

Search.defaultProps={
  style: '',
  onSearch: () => {}
}

export default Search