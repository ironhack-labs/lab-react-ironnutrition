import React from "react";

function SearchBar({ handleSearch }){
    return(
        <>
        <input placeholder="Search..." onChange={e => handleSearch(e.target.value)}></input>
        </>
    )
}

export default SearchBar