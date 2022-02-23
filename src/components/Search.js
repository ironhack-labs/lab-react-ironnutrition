import React from "react";
import { useState } from "react";

function Search(props) {

    const { filterByName } = props;

    const [searchInput, setSearchInput] = useState("");
    
    function inputHandler(evnt) {
        setSearchInput(evnt.target.value);
        filterByName(evnt.target.value);
    }

    return (
        <form>
            <input 
                className="input" 
                type="text" 
                name="searched"
                placeholder="Search Food here..."
                value={ searchInput }
                onChange={ inputHandler }
            />
        </form>
    )
}

export default Search;