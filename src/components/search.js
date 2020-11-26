import React, { useState } from "react";

const FoodSearch = (props) => {
    
    const handleSearchInput = (event) => {
        let inputValue = event.target.value;
        
    }


    return (
        <input 
        name="search" 
        type="text" 
        placeholder="Search here"
        onChange={handleSearchInput}
        value={searchValue} />
    )
}

export default FoodSearch;