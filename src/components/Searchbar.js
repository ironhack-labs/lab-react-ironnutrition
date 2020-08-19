import React from 'react'

function Searchbar(props) {
    return (
             <input type='text'
                onChange={props.onSearch}
                placeholder='Search for food'>
            </input>
    )
}

export default Searchbar