import React from 'react';

const FoodSearch = (props) => {
  const handleSearchInput = (event) => {
    let inputValue = event.target.value;
    props.handleFilterSearch(inputValue);
  };

  return (
    <input
      className="input"
      name="search"
      type="text"
      placeholder="Search for food"
      onChange={handleSearchInput}
    />
  );
};

export default FoodSearch;
