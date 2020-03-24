import React, { createContext, useState } from "react";
import foods from "../../../public/data/foods.json";

//creación de contexto
export const FoodContext = createContext();

//creacion de Provider y de sus values

export const FoodContextProvider = props => {
  //recojo los datos del json y se crea un useState, puedes recoger toda la lista del json donde quieras.
  const [allFood, setAllFood] = useState(foods);

  //añadir un nuevo alimento a la lista
  const newFood = food => {
    const { name, calories, images } = food; //objetos que voy a recuperar de la prop food
    setAllFood([...allFood, { name, calories, images }]); //copia mi array de objetos(...allfood) y le añado un objeto mas a mi array de objetos con las siguientes prop(name, calories, images )
  };

  //para poder usar el Contexto en cualquier componente necesitamos llamar al nombre del createContext().Provider
  return (
    <FoodContext.Provider value={{ allFood, setAllFood, newFood }}>
      {props.children}
      {/* las props children se usan para cualquier propiedad a los componenentes hijos del contexto(value)  */}
    </FoodContext.Provider>
  );
};
