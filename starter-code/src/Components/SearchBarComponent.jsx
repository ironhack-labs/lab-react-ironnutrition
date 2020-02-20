import React from 'react'

const SearchBarComponent = ({search}) => {
    return (
        <input type="text" name="searchBar" placeholder="search Bar" onChange={search}></input>
    )
}

export default SearchBarComponent
