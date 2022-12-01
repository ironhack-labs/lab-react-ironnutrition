import { Input } from "antd";
import React, { useState } from "react";

const Search = (props) =>{
    const {searchFn} = props;
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (e) =>{
        setSearchTerm(e.target.value);
        searchFn(e.target.value);
        console.log(searchTerm)
    }

    return (
        <div>
            <label>Search</label>
            <Input value={searchTerm} onChange={handleSearch}/>
        </div>
    )
}
 export default Search