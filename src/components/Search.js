import React, { useState } from "react";
function Search(props) {

    const [search, setSearch] = useState("");

    const filter = (searchedFood) => {
        if (!searchedFood) {
            props.setFoods(props.foods)
        } else {
            props.setFoods((prevValue) => {
                return prevValue.filter(food => food.name.toLowerCase().includes(searchedFood.toLowerCase()));
            });
        }
    }

    function searchHandler(e) {
        setSearch(e.target.value);
        filter(e.target.value);
        setSearch(e.target.value);
    }
    
    return (
        <div >
            <form className="Show">
                <input className="input" type="text" placeholder="Search food" value={search} onChange={searchHandler} />
            </form>
        </div>
    )
}
export default Search;