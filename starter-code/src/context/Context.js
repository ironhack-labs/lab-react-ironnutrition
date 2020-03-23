import React, { createContext, useState } from "react";
import foodJSON from "../bbss/foods.json";

export const FoodsContext = createContext();
export const FoodsContextProvider = props => {
  const [foods, setFood] = useState(foodJSON);

  const [filterStart, setFilterStart] = useState("");

  const filteredFood = foods.filter(food => {
    const re = new RegExp(filterStart);
    return re.test(food.name);
  });

  //Obtener name food
  const getFoodName = nameFood =>
    foods.filter(food => food.name === nameFood)[0];

  return (
    <FoodsContext.Provider
      value={{
        foods,
        getFoodName,
        setFood,
        filterStart,
        setFilterStart,
        filteredFood
      }}
    >
      {props.children}
    </FoodsContext.Provider>
  );
};
