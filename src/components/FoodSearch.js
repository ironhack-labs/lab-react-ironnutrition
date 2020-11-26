import React, { useState } from "react";

const FoodSearch = (props) => {
    
    const handleSearchInput = (event) => {
        let inputValue = event.target.value;
        props.handleFilterSearch(inputValue);
        
    };


    return (
        <input 
        className="input"
        name="search" 
        type="text" 
        placeholder="Search here"
        onChange={handleSearchInput}
        
         />
    );
};

export default FoodSearch;