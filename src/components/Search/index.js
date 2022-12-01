import React from 'react'
import {Input} from 'antd'
import { useState } from 'react'

const Search = (props) => {

const { searchFn } = props;

const [searchTerm, setSearchTerm] = useState("");

const handleSearch = (e) => {
 setSearchTerm(e.target.value);
 searchFn(e.target.value);
 
}

  return (
    <div>
        <label>Search</label> 
        <Input value={searchTerm} onChange={handleSearch}/>
    </div>
  )
}

export default Search;