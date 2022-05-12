import React, { useState } from "react";


function Search(props) {

    const [search, setSearch] = useState('');

    function searchHandler(e) {
        e.preventDefault()
        setSearch(e.target.value)
        filterFood(e.target.value)
    };

    const filterFood = (userSearch) => {
        if (userSearch === props.food) {
            // props.setFood(filteredList)
        }
    }

    return (
        <form className="search-bar">
            <input className="input"
                value={search} type="text"
                placeholder="Search food"
                onChange={searchHandler} />
        </form>
    )
}
export default Search; 