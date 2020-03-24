// import React, { createContext } from "react";
// import dataFoods from "./foods.json";

// export const FoodsContext = createContext();
// export const FoodContextProvider = ({ children }) => {
//   const [foods, setFoods] = useState(dataFoods);
//   return (
//     <FoodsContext.Provider value={{ foods, setFoods }}>
//       {children}
//     </FoodsContext.Provider>
//   );
// };

import React, { useState, createContext } from "react";
import dataFoods from "./foods.json";

export const FoodsContext = createContext();
export const FoodsContextProvider = props => {
  //Obtener name food
  //   const getFood = nameFood => foods.filter(food => food.name === nameFood)[0];
  const [foods, setFoods] = useState(dataFoods);

  return (
    <FoodsContext.Provider value={{ foods, setFoods }}>
      {props.children}
    </FoodsContext.Provider>
  );
};
