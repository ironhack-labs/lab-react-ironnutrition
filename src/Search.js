import React, { Component } from "react";


// const Search = () => {
//     return <div>Hello world!</div>
// }


const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
 
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search for food"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

// export default Search;
export default SearchBar;

