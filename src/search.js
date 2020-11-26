import React, { useState } from 'react';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchFood(searchInput);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Search for food"
            onChange={handleSearchInput}
          />
        </div>
        <div className="control">
          <button type="submit" className="button is-info">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
