import React, { useContext, useState } from "react";
import { FoodContext } from "./context/FoodContext";

export const SearchFood = () => {
  //recojo el contexto
  const { searchFood } = useContext(FoodContext);
  const [nameSearch, setNameSearch] = useState("");

  const handleSearch = name => {
    //cambio el estado del input referenciandolo con el value
    setNameSearch(name);
    //le paso el metodo que tengo echo en el contexto
    searchFood(name);
  };

  return (
    <input value={nameSearch} onChange={e => handleSearch(e.target.value)} />
  );
};

export default SearchFood;
