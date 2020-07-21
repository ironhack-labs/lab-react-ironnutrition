import React from 'react'

export default function SearchBar(props) {
    return (
        <div>
            <label htmlFor="search-bar">Search bar</label>
            <input
                type="text"
                value={props.searchParam}
                name="search-bar"
                onChange={props.handleChange}
            />
        </div>
    )
}
