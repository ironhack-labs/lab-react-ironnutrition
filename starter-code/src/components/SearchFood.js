import React, { useState, useContext } from "react";
import { FoodContext } from "../components/context/Context";

export const SearchInput = () => {
  const { food, setFood, findFood } = useContext(FoodContext);

  const [search, setSearch] = useState("");

  // const handleSearch = e => {
  //   findFood(e.target.value).then(name => setFood(name));
  //   setSearch(e.target.value);
  // };

  const handleSearch = e => {
    const search = findFood(e.target.value);
  };

  return (
    <input
      className="input search-bar"
      type="text"
      id="search"
      value={search}
      placeholder="Search food"
      onChange={handleSearch}
    />
  );
};
