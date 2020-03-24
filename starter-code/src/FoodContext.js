import React, { createContext, useState } from "react";
import foodsJSON from "./foods.json";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(foodsJSON);
  const [searchFoods, setSearchFoods] = useState("");

  return (
    <FoodContext.Provider
      value={{ foods, setFoods, searchFoods, setSearchFoods }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
