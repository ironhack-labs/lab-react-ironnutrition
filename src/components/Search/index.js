import {Input} from "antd"
import React, {useState} from "react"

const Search = (props)=>{
    const {searchFN} = props;
    const [searchTerm, setSearchTerm]=useState("")

    const handleSearch =(event)=>{
        setSearchTerm(event.target.value)
        searchFN(event.target.value)
    }
    return (
        <div>
            <label>Search</label>
            <Input value={searchTerm}
            onChange={handleSearch}/>
        </div>
    )
}

export default Search