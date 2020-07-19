import React from 'react'

function SearchBar({state, handleSearchBar}) {
    return (
        <div className='field'>
            <div className='control'>
                <input className='input' type='text' value={state.searchBar} onChange={handleSearchBar} />
            </div>
        </div>
    )
}

export default SearchBar
