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
      <input
        type="text"
        placeholder="Search for food"
        onChange={handleSearchInput}
      />
    </form>
  );
}

export default Search;
