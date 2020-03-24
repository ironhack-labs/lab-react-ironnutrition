import React, { createContext, useState } from "react";
import foods from "../../../public/data/foods.json";

//creación de contexto
export const FoodContext = createContext();

//creacion de Provider y de sus values

export const FoodContextProvider = props => {
  //recojo los datos del json y se crea un useState, puedes recoger toda la lista del json donde quieras.
  const [allFood, setAllFood] = useState(foods);

  //para poder usar el Contexto en cualquier componente necesitamos llamar al nombre del createContext().Provider
  return (
    <FoodContext.Provider value={{ allFood, setAllFood }}>
      {props.children}
      {/* las props children se usan para cualquier propiedad a los componenentes hijos del contexto(value)  */}
    </FoodContext.Provider>
  );
};
