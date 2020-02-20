import React from 'react'

const SearchBarComponent = ({searchInput, handleInputs, arrayFilter}) => {
    return (
        <input type="text" name="searchBar"  value={searchInput} placeholder="search Bar"  onChange={handleInputs}></input>
    )
}

export default SearchBarComponent
