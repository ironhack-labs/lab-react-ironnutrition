import React, { useState, useContext } from "react";
import { SearchBox } from "../../public/styles/Search.styles";
import { FoodsContext } from "../context/Context";

export const Search = () => {
  const { foods, filterStart, setfilteredFood, setFilterStart } = useContext(
    FoodsContext
  );

  return (
    <SearchBox>
      <input
        placeholder="Filter Name Food"
        value={filterStart}
        onChange={e => {
          setFilterStart(e.target.value);
          setfilteredFood(
            foods.filter(food => {
              const re = new RegExp(e.target.value);
              return re.test(food.name);
            })
          );
        }}
      />
    </SearchBox>
  );
};
