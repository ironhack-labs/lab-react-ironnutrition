import React, { createContext, useState } from "react";
import foodList from "../../public/data/foods.json";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [food, setFood] = useState(foodList);
  const [searchFilter, setSearchFilter] = useState("");

  const filtered = food.filter(item => {
    return item.name.toLowerCase().indexOf(searchFilter) !== -1;
  });

  return <FoodContext.Provider value={{ food, setFood, searchFilter, setSearchFilter, filtered }}>{children}</FoodContext.Provider>;
};

export default FoodContextProvider;
