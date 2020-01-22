import React, { Component } from "react";

const SearchFood = props => {
    return(
        <div>
            <label>Search Food: </label>
            <input type="text" onChange={this.searchTheFood} ></input>
        </div>
    )
}

export default SearchFood;