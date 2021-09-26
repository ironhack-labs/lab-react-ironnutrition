import React from 'react';

const Search = (props) => {
  return (
    <div>
      <label>Search foods</label>
      <input onChange={props.searchFoods} type="text" />;
    </div>
  );
};

export default Search;
