import React from "react";
import { useState } from "react";

function Search({food, setFoods}) {

    const [search, setSearch] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const searchFunction = (e) =>{
        const searchParameter = e.target.value;
        setSearch(searchParameter);
        const searchResults = food.filter(element => element.name.toLowerCase().includes(searchParameter.toLowerCase()));
        setFoods(searchResults);
    }

    return(
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input type='text' name='search' value={search} onChange={searchFunction}/>
            </form>
        </div>
    )
}

export default Search;