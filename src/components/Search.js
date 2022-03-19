// jshint esversion:8
import React from "react";
import { useState } from "react";

export const Search = (props) => {
    
    const [userString, setUserString] = useState("");
   
    const handleStringFilter = (e) => {
        setUserString(e.target.value);
        props.filteredFoods(e.target.value);
    }
    

    return (
        <div className="Search">
            <label>
                <input value={userString} onChange={handleStringFilter} type="text" id="searchFilter"/>
            </label> <br />
        </div>
        
    )
}