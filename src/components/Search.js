import { Divider, Input } from 'antd'
import { useState } from "react"


function Search({ search }) {
    const [searchQuery, setSearchQuery] = useState()

    const handleSearch = e => {
        const query = e.target.value
        setSearchQuery(query)
        search(query)
    }
    



  return (
    <div className="search">
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchQuery} type="text" onChange={handleSearch} />
    </div>
  )
}

export default Search