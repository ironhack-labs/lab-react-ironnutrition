import React, { createContext, useState } from "react";
import foods from "../../foods.json";

// Para crear el contexto tengo que hacer lo siguiente:

export const FoodContext = createContext();

// Ahora creo el Provider, que sirve para exportar los valores (values) que yo quiera:

export const FoodContextProvider = props => {
  // Añado los datos del foods.json y le creo un estado (useState) y usarlo donde desee:
  const [allFood, setAllFood] = useState(foods);

  // Para añadir un nuevo Food, creamos una funcion aquí que recoja las props que le mande desde el formulario y genere un nuevo Estado con el food
  const addFood = food => {
    const { name, calories, images } = food; // recojo los valores que vienen de la prop (food)

    setAllFood([...allFood, { name, calories, images }]); // Creo primero una copia de allFood con ...allFood, y le agrego un nuevo objeto con "name, calories, images"
  };

  return (
    <FoodContext.Provider
      value={{
        allFood,
        addFood
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};
