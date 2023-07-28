import React, { useState } from "react"

function Search(props) {
    return (
        <div>
            <h2>Search</h2>
            <label>Search</label>
            <input
                type="text"
                name="search"
                value={props.searchString}
                onChange={e => {
                    props.handleSearch(e.target.value)
                }}
            />
        </div>
    )
}

export default Search
