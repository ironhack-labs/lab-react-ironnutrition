import React, { useState } from 'react';
import foods from '../foods.json';

function SearchBar(props) {

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        props.setFood(() => {
            // don't use prevFood, always the whole list [...foods] to filter
            // avoid just 'e' for the element, "e" have full scope in this function(handleSearch(e)) (e is the event!)
            return [...foods].filter(element => element.name.includes(e.target.value));              
        });
    }

    return (
        <div>
            <form onChange={handleSearch}>
                <label>Search</label>
                <input value={search} type="text" onChange={(e) => { setSearch(e.target.value) }} />
            </form>
        </div>
    )
}

export default SearchBar 