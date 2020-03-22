import React, { createContext, useState } from "react";
import foodsJSON from "./foods.json";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(foodsJSON);

  return (
    <FoodContext.Provider value={{ foods, setFoods }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
