import React, { useState, createContext } from "react";
import dataFoods from "./foods.json";

export const FoodsContext = createContext();

export const FoodsContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(dataFoods);

  const createNewFood = newFood => {
    setFoods([newFood, ...foods]);
    console.log("HEY newFood!", newFood);
  };

  return (
    <FoodsContext.Provider value={{ foods, setFoods, createNewFood }}>
      {children}
    </FoodsContext.Provider>
  );
};
