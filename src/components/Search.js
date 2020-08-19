import React from 'react'

function Search(props){
    return (
        <div>
            <input onChange={props.onSearch} className="input"  type="text" placeholder="Search for food"></input>
        </div>
    )
}

export default Search;