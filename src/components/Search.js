import { useState } from "react";
import React from 'react';

function Search (props) {

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        
        props.searchFood(search)    
    }

   //the filtering is kind of wobbly: it works only after a second letter is typed. Not sure where the issue is.

    return(
        <div>
        <input type="search"  name="search" value={search} placeholder="Search..." onChange={handleSearch}/>
       
        </div>
    );
}

export default Search;