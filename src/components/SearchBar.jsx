import { Input } from 'antd'
import { useState } from 'react'

const SearchBar = (props) => {
  const [searchStr, setSearchStr] = useState('')

  const handleSearchInput = (e) => {
    setSearchStr(e.target.value)
    props.searchFilter(e.target.value)
  }

  return (
    <div style={{ minWidth: 500, margin: 20 }}>
      <Input
        type="text"
        placeholder="Search Food"
        value={searchStr}
        onChange={handleSearchInput}
      />
    </div>
  );
}

export default SearchBar