import React, { createContext, useState } from "react";
import FoodData from "../lib/foods.json";

export const DataContext = createContext();

const DataContextProvider = props => {
  const [foodList, setFood] = useState(FoodData);

  return (
    <DataContext.Provider value={{ foodList, setFood }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
