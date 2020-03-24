import React, { useState, useContext } from "react";
import { FoodContext } from "./FoodContext";

const Search = () => {
  const { setSearchFoods } = useContext(FoodContext);
  const [search, setSearch] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    setSearch(e.target.value);
    setSearchFoods(e.target.value);
  };

  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-primary"
          type="text"
          placeholder="Primary input"
          onChange={handleSearch}
          value={search}
        />
      </div>
    </div>
  );
};

export default Search;
