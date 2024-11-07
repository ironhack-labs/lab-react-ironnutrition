import { Divider, Input } from "antd";

import { useState } from "react";

const SearchFood = ({ searchFoodStr, setSearchFoodStr, filterSearch }) => {
  function handleChange(e) {
    setSearchFoodStr(() => {
      filterSearch(e.target.value);
      return e.target.value;
    });
  }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        name="search"
        value={searchFoodStr}
        type="text"
        onChange={handleChange}
      />
    </>
  );
};

export default SearchFood;
