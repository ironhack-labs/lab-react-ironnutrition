import React, { useState, createContext } from "react";
import foods from "../foods.json";

export const FoodContext = createContext();

export const FoodProvider = (props) => {
  foods["filteredFood"] = foods.foods;
  const [allFoods, setFoods] = useState(foods);
 
 

  return (
    <FoodContext.Provider value={[allFoods,setFoods]}>
      {props.children}
    </FoodContext.Provider>
  );
};
