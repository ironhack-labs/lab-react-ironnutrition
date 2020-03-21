import React, { createContext, useState } from "react";
import foodList from "../../public/data/foods.json";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [food, setFood] = useState(foodList);

  return <FoodContext.Provider value={{ food, setFood }}>{children}</FoodContext.Provider>;
};

export default FoodContextProvider;
