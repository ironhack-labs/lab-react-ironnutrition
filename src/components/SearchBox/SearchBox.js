import './SearchBox.css';
import { useState } from 'react';

function SearchBox(props) {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        // value={searchValue}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default SearchBox;
