import React, { createContext, useState } from "react";
import foodData from "../../../public/data/foods.json";

export const FoodContext = createContext();

export const FoodContextProvider = props => {
  const [allFood, setAllFood] = useState(foodData);

  const addFood = food => {
    const { name, calories, image } = food;
    setAllFood([...allFood, { name, calories, image }]);
  };

  const findFood = name => {
    return food.find(food => food.name === name);
  };

  return (
    <FoodContext.Provider value={{ allFood, setAllFood, addFood, findFood }}>
      {props.children}
    </FoodContext.Provider>
  );
};
