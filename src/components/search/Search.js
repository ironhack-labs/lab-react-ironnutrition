import React from 'react'

const Search = (props) => {
    return (
        <div className="control">
            <input onChange={props.onSearch} type="text" placeholder="Search food"></input>
        </div>
    )
}

export default Search