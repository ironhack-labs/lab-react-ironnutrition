import React from 'react'

export default function SearchFood(props) {
     
    return (
        <div>            
            <label>Search Bar</label>
          <input
            type="text"
            value={props.searchParam}
            name="search-bar"
            onChange={props.handleChange}
          />
        </div>
    )
}


