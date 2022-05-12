import React, { useState } from 'react'

function SearchBox(props) {
    const [searchFood, setSearchFood] = useState('');

    const handleSearch = e => {
        e.preventDefault();
        setSearchFood(e.target.value);
        props.foodSearch(e.target.value);
      }

    return (
        <div>
            <label >Search Food</label>
            <input type="text" name="search" value={searchFood} onChange={handleSearch} placeholder="Search"/>
        </div>
    )
}

export default SearchBox