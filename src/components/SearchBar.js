import React from 'react'

function SearchBar( {search, onSearch} ) {
    const handleChange = (ev) => {
        onSearch(ev.target.value)
    }


    return (
        <div>
            <input
                className ='searchBar'
                type='text'
                placeholder='Search'
                value={search}
                onChange={(e) => handleChange(e)}
            />

        </div>
    )
}

export default SearchBar