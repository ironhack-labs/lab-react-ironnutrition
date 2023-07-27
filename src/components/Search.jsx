import React, { useState } from "react"

function Search(props) {
    const [searchedFood, setSearchedFood] = useState("")
    const { searchFood } = props

    const handleInput = e => {
        setSearchedFood(e.target.value)
        searchFood(e.target.value)
    }

    return (
        <div>
            <h2>Search</h2>
            <label>Search</label>
            <input type="text" value={searchedFood} onChange={handleInput} />
        </div>
    )
}

export default Search
