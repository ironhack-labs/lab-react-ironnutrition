import React from 'react';

function Search(props) {
  return (
    <div className="field">
      <div className="control">
        <input
          type="text"
          className="input is-large"
          id="searchBar"
          name="searchTerm"
          placeholder="Search for a food..."
          onKeyUp={(event) => props.filterFoods(event.currentTarget.value)}
        />
      </div>
    </div>
  );
}

export default Search;
