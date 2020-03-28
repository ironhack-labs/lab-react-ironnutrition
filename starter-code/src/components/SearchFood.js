import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";

const SearchFood = () => {
  const { setSearchFoods } = useContext(DataContext);
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
          className="form-control"
          type="text"
          placeholder="Search Food"
          onChange={handleSearch}
          value={search}
        />
      </div>
    </div>
  );
};

export default SearchFood;
