import React, { useState } from 'react';

function SearchFood(props) {

    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (e) => {
        props.search(e.target.value)
        setSearchInput(e.target.value)
    }

    return (
        <div className="search-bar">
        Search: 
        <input
          type="text" 
          onChange={handleSearch}
          value={searchInput}
        />
        </div>
    )
}

export default SearchFood;