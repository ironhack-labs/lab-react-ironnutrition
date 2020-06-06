import React from 'react';

function Search (props) {

    return (
      <>
        <label htmlFor="search">Search by name</label>
        <input
          type="text"
          value={props.inputValue}
          onChange={props.foodsFilterOnChange}
          name="search"
          id="search"
        />
      </>
    );
  }


export default Search;
