import React, { useState, useContext } from "react";
import { SearchBox } from "../../public/styles/Search.styles";
import { FoodsContext } from "../context/Context";

export const Search = () => {
  const { filterStart, setFilterStart } = useContext(FoodsContext);

  return (
    <SearchBox>
      <input
        placeholder="Filter Name Food"
        value={filterStart}
        onChange={e => setFilterStart(e.target.value)}
      />
    </SearchBox>
  );
};
