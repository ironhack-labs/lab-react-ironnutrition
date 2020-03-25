import React, { useContext, useState } from "react";
import {
  FoodContext,
  FoodContextProvider
} from "../Components/context/foodContext";

export const Search = () => {
  const { searchFood } = useContext(FoodContext);
  const [name, setName] = useState("");

  const handleSearch = food => {
    setName(food);
    searchFood(food);
  };

  return <input value={name} onChange={e => handleSearch(e.target.value)} />;
};
