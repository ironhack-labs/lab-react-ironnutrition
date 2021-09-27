import React from 'react';

const Search = (props) => {
  const searchChangeHandler = (event) => {
    props.searchFoods(event.target.value);
  };

  return (
    <div>
      <label>Search foods</label>
      <input
        value={props.searchString}
        onChange={searchChangeHandler}
        type="text"
      />
      ;
    </div>
  );
};

export default Search;
