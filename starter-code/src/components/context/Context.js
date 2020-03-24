import React, { createContext, useState } from "react";
import foodData from "../../../public/data/foods.json";

export const FoodContext = createContext();

export const FoodContextProvider = props => {
  const [allFood, setAllFood] = useState(foodData);
  const [searchAllFood, setSearchAllFood] = useState(foodData); //to Search

  const addFood = food => {
    const { name, calories, image } = food;
    setAllFood([...allFood, { name, calories, image }]);
    setSearchAllFood([...allFood, { name, calories, image }]);
  };

  const searchFood = name => {
    setAllFood(
      searchAllFood.filter(food =>
        food.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  return (
    <FoodContext.Provider
      value={{
        allFood,
        addFood,
        searchFood
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};
