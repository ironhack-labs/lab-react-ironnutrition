import React from 'react'

function SearchBar({ searchStringChange, searchString }) {

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={searchStringChange}
                    value={searchString}
                />
            </form>
        </div>
    )
}

export default SearchBar;
