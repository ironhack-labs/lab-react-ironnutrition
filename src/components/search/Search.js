import React from 'react'

export default function Search(props) {
    return (
        <div>
            <input type="text" name="searchBar" placeholder="Search" onChange={props.onSearch}/>
        </div>
    )
}
