import React, { createContext } from "react";
import foods from "../bbss/foods.json";

export const FoodsContext = createContext();
export const FoodsContextProvider = props => {
  //Obtener name food
  const getFood = nameFood => foods.filter(food => food.name === nameFood)[0];

  return (
    <FoodsContext.Provider value={{ foods, getFood }}>
      {props.children}
    </FoodsContext.Provider>
  );
};
