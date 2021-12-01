import React from 'react'

function SearchFood(props) {
    return (
        <div>
            <input onChange={props.handlerSearch} type="text" placeholder="search book" />
        </div>
    )
}

export default SearchFood
