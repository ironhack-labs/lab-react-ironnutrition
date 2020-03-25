import React, { useState, createContext } from "react";
import dataFoods from "./foods.json";

export const FoodsContext = createContext();
export const FoodsContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(dataFoods);

  return (
    <FoodsContext.Provider value={{ foods, setFoods }}>
      {children}
    </FoodsContext.Provider>
  );
};

// import React, { createContext, useState } from "react";
// import foodsJSON from "./foods.json";

// export const FoodContext = createContext();

// const FoodContextProvider = ({ children }) => {
//   const [foods, setFoods] = useState(foodsJSON);
//   const [searchFoods, setSearchFoods] = useState("");
//   const [todaysFoods, setTodaysFoods] = useState([]);

//   const addFood = newFood => {
//     const index = todaysFoods.findIndex(food => food.name === newFood.name);
//     if (index !== -1) {
//       const newTodaysFoods = [...todaysFoods];
//       const oldFood = newTodaysFoods[index];
//       newTodaysFoods[index] = {
//         name: oldFood.name,
//         quantity: oldFood.quantity + newFood.quantity,
//         calories: oldFood.calories + newFood.calories
//       };
//       setTodaysFoods(newTodaysFoods);
//     } else setTodaysFoods([...todaysFoods, newFood]);
//   };

//   const deleteFood = foodToDelete =>
//     setTodaysFoods(todaysFoods.filter(food => food.name !== foodToDelete));

//   return (
//     <FoodContext.Provider
//       value={{
//         foods,
//         setFoods,
//         searchFoods,
//         setSearchFoods,
//         todaysFoods,
//         addFood,
//         deleteFood
//       }}
//     >
//       {children}
//     </FoodContext.Provider>
//   );
// };

// export default FoodContextProvider;
