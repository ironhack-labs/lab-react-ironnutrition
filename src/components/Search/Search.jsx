import React from 'react'
import { useState } from 'react'
import { Divider, Input } from 'antd';

function Search({results}) {

 const [searchString, setSearchString] = useState("");

    const handleSearch = (e) => {
        //setSearchString({ $regex: e.target.value, $options: 'i' })
        console.log(e.target.value);
        
        setSearchString(e.target.value);

        results(e.target.value);
    }

  return (
    
    <>
         <Divider>Search</Divider>

        <label htmlFor="search">Search</label>
        <Input type="text" name="search" value={searchString} onChange={handleSearch} />
    </>
  )
}

export default Search