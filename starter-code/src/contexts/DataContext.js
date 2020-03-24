import React, { createContext, useState } from "react";
import FoodData from "../lib/foods.json";

export const DataContext = createContext();

const DataContextProvider = props => {
  const [foodList, setFood] = useState(FoodData);
  const [fixedFoods, setFixedFoods] = useState(FoodData);

  const searchFood = name => {
    setFood(
      fixedFoods.filter(food =>
        food.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  return (
    <DataContext.Provider value={{ foodList, setFood, searchFood }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
