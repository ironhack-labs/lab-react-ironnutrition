import React from "react";
import { useState } from "react";

function Search(props) {
    const { search } = props;
    const [ query, setQuery ] = useState("");

    function handleSearchInput(searchInput) {
        setQuery(searchInput);
        console.log("SEARCHINPUT (e.target.value): ", searchInput);
        console.log("query after setQuery(searchInput): ", query);
        search(searchInput);
    }

    return (
        <div>
            <input 
            type="text" 
            className="search-field" 
            name="searchInput"
            value={query}
            placeholder='Search'
            onChange={(e) => handleSearchInput(e.target.value)}
            />
        </div>
    );
}

export default Search;