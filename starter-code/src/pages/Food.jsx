import React, { useContext, useState, useEffect } from "react";
import FoodBox from "../components/FoodBox";
import SearchBox from "../components/SearchBox";
import { FoodContext } from "../api/food.api";

const Food = () => {
  const { food } = useContext(FoodContext);
  const [searchFilter, setSearchFilter] = useState("");

  const filtered = food.filter(item => {
    return item.name.toLowerCase().indexOf(searchFilter) !== -1;
  });

  return (
    <div className="column">
      <SearchBox {...{ setSearchFilter, searchFilter }} />
      {filtered.map((food, i) => {
        return <FoodBox key={i} {...food} />;
      })}
    </div>
  );
};

export default Food;
