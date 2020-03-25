import React, { createContext, useState } from "react";
import FoodsArray from "./foods.json";

//creamoos Datacontext para poder disponer de él en todas partes
export const DataContext = createContext();
//Devuelve un objeto con 2 valores {Provider, Consumer}

//Recibo children, que viene de App.js, donde le decimos que App es children del provider
const DataContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(FoodsArray);
  const [searchFoods, setSearchFoods] = useState("");

  //Usamos el Provider para dar "value" a todas lo que declaramos arriba
  return (
    <DataContext.Provider
      value={{
        foods,
        setFoods,
        searchFoods,
        setSearchFoods
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
