import React, { createContext, useState } from "react";
import FoodsArray from "./foods.json";

//creamoos Datacontext para poder disponer de él en todas partes
export const DataContext = createContext();
//Devuelve un objeto con 2 valores {Provider, Consumer}

//Recibo children, que viene de App.js, donde le decimos que App es children del provider
const DataContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(FoodsArray);
  const [searchFoods, setSearchFoods] = useState("");
  const [todaysFoods, setTodaysFoods] = useState([]);

  const addFood = newFood => {
    const index = todaysFoods.findIndex(food => food.name === newFood.name);
    if (index !== -1) {
      const newTodaysFoods = [...todaysFoods];
      const oldFood = newTodaysFoods[index];
      newTodaysFoods[index] = {
        name: oldFood.name,
        quantity: oldFood.quantity + newFood.quantity,
        calories: oldFood.calories + newFood.calories
      };
      setTodaysFoods(newTodaysFoods);
    } else setTodaysFoods([...todaysFoods, newFood]);
  };

  const deleteFood = foodToDelete =>
    setTodaysFoods(todaysFoods.filter(food => food.name !== foodToDelete));

  //Usamos el Provider para dar "value" a todas lo que declaramos arriba
  return (
    <DataContext.Provider
      value={{
        foods,
        setFoods,
        searchFoods,
        setSearchFoods,
        todaysFoods,
        addFood,
        deleteFood
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
