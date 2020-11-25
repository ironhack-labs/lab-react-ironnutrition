import React, { useState } from 'react';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchFood(searchInput);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div class="field has-addons">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Search for food"
            onChange={handleSearchInput}
          />
        </div>
        <div class="control">
          <p class="button is-info">Search</p>
        </div>
      </div>
    </form>
  );
}

export default Search;
