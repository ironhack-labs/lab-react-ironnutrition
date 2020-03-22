import React, { createContext, useState } from "react";
import foodsJSON from "./foods.json";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [foods] = useState(foodsJSON);

  return (
    <FoodContext.Provider value={{ foods }}>{children}</FoodContext.Provider>
  );
};

export default FoodContextProvider;
