import React, { createContext, useState } from "react";
import foodData from "../../../public/data/foods.json";

export const FoodContext = createContext();

export const FoodContextProvider = props => {
  const [allFood, setAllFood] = useState(foodData);
  const [searchAllFood, setSearchAllFood] = useState(foodData); //to Search
  const [todaysFood, setTodaysFood] = useState([]);

  const addFood = food => {
    const { name, calories, image } = food;
    setAllFood([...allFood, { name, calories, image, quantity: 0 }]);
    setSearchAllFood([...allFood, { name, calories, image }]);
  };

  const searchFood = name => {
    setAllFood(
      searchAllFood.filter(food =>
        food.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const addTodaysFood = food => {
    const { name, calories, quantity } = food;
    setTodaysFood([...todaysFood, food]);
  };

  const addQuantity = (name, quantity) => {
    setAllFood(
      allFood.map(food => {
        return food.name == name ? { ...food, quantity } : food;
      })
    );
  };

  const deleteFood = foodClicked => {
    setTodaysFood(todaysFood.filter(food => food.name !== foodClicked));
  };

  return (
    <FoodContext.Provider
      value={{
        allFood,
        addFood,
        searchFood,
        todaysFood,
        addTodaysFood,
        addQuantity,
        deleteFood
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};
