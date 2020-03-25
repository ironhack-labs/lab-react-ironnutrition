import React, { createContext, useState } from "react";
import FoodsArray from "./foods.json";

//creamoos Datacontext para poder disponer de él en todas partes
export const DataContext = createContext();
//Devuelve un objeto con 2 valores {Provider, Consumer}

//Paso children como prop y declaro la collección
const DataContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(FoodsArray);

  //No entiendo lo de children
  //Usamos el Provider para dar "value" a todos sus hijos
  return (
    <DataContext.Provider value={{ foods, setFoods }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
