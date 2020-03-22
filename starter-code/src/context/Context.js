import React, { createContext, useState } from "react";
import foodJSON from "../bbss/foods.json";

export const FoodsContext = createContext();
export const FoodsContextProvider = props => {
  const [foods, setFood] = useState(foodJSON);
  //Obtener name food
  const getFoodName = nameFood =>
    foods.filter(food => food.name === nameFood)[0];

  return (
    <FoodsContext.Provider value={{ foods, getFoodName, setFood }}>
      {props.children}
    </FoodsContext.Provider>
  );
};
