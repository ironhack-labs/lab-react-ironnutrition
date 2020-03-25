import React, { useState, useContext } from "react";
import { FoodContext } from "../components/context/Context";

export const SearchInput = () => {
  const { searchFood } = useContext(FoodContext);

  const [search, setSearch] = useState("");

  const handleSearch = name => {
    setSearch(name);
    searchFood(name);
  };

  return (
    <input
      className="input search-bar"
      type="text"
      id="search"
      value={search}
      placeholder="Search food"
      onChange={e => handleSearch(e.target.value)}
    />
  );
};
