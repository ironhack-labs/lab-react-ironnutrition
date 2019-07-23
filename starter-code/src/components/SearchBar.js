import React from 'react';

function SearchBar(props) {
    return(
        <div className="container">
            <input className="input" type="text" placeholder="Search Food" onChange={props.onChange} value={props.search}></input>
        </div>
    )
}

export default SearchBar;