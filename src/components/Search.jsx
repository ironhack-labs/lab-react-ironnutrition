import { useState } from "react";

function Search(props){
    return(
        <div className="Search">
            <label><b>Search</b>
                <input type="text" value={props.searchText} onChange={props.searchFood}/>
            </label>
        </div>
    )
}

export default Search