import React from "react"
import Food from './Food';



const Search = (props) => {
    return (
        <>
            <label htmlFor="search">Search by name</label>
            <input type="text" value={props.inputValue} onChange={props.foodFilterOnChange}/>
        </>
    )
}

export default Search



