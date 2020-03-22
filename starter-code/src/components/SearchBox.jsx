import React, { useContext } from "react";
import { FoodContext } from "../api/food.api";

const SearchBox = () => {
  const { setSearchFilter, searchFilter } = useContext(FoodContext);
  return (
    <p className="control is-expanded">
      <input className="input" type="text" placeholder="Find food" value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />
    </p>
  );
};

export default SearchBox;
