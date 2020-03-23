import React, { createContext, useState } from "react";
import foodData from "../../../public/data/foods.json";

export const FoodContext = createContext();

export const FoodContextProvider = props => {
  const [food, setFood] = useState(foodData);

  const findFood = name => {
    return food.find(food => food.name === name);
  };

  return (
    <FoodContext.Provider value={{ food, setFood, findFood }}>
      {props.children}
    </FoodContext.Provider>
  );
};
