import React from 'react';
import 'bulma/css/bulma.css';

function SearchBar(props) {
  return (
    <div>
      <label htmlFor="search"></label>
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
}

export default SearchBar;
