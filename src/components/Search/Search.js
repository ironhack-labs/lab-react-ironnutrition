import React from 'react';
import './Search.css';

const Search = (props) => {

    const captureSerchText = (e) => props.filterProducts(e.target.value);

    return (
        <input className="input search-input" type="text" onChange={(e) => captureSerchText(e)} placeholder="Search any product..." />
    )
}

export default Search;