import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        type='search'
        placeholder='search foods'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;