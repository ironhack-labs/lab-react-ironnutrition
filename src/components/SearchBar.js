import React, {useState} from 'react';

function SearchBar(props) {
  const { searchQuery, onSearch } = props;

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={onSearch}
        value={searchQuery}
      />
    </div>
  );
}

export default SearchBar;