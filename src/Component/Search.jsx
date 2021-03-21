import React, { PureComponent } from 'react';

const Search = (props) => {
  const { searchValue, handleSearch } = props;

  return (
    <div>
      <input 
      placeholder="Search" 
      type="text"
      value={searchValue}
      onChange={(event) => handleSearch(event, event.target.value)}
      />
    </div>
  );
};

export default Search;
