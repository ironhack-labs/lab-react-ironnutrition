import React from 'react'

function SearchBar (props)  {
    return (
        <div>
            <input type="search"
            className="search-bar"
            placeholder={props.placeholder}
            onChange = {props.handleChange}
            />
        </div>
    )
}

export default SearchBar


