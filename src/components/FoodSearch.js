import React from 'react';

const FoodSearch = (props) => {
  // handleSearchInput() - monitor all the changes coming into the input field and change the state
  const handleSearchInput = (event) => {
    // The value from the input field
    let inputValue = event.target.value;
    // Filter the foodlist according to the state value
    props.handleFilterSearch(inputValue);
  };

  return (
    <input
      name="search"
      type="text"
      placeholder="Search for your food..."
      onChange={handleSearchInput}
    />
  );
};

export default FoodSearch;