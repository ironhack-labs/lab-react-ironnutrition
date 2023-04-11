import { Divider, Input } from 'antd';
import { useState } from 'react'

function Search({resultsSearch}) {

  const [wordToSearch, setWordToSearch] = useState("")
  const handleSearch = e => {
    setWordToSearch(e.target.value)
    resultsSearch(e.target.value)
  }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={wordToSearch} key="search" type="text" 
        onChange={handleSearch} 
      />
    </>
  )
}

export default Search