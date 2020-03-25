import React, { createContext, useState } from "react";
import foods from "../../../public/data/foods.json";

//creación de contexto
export const FoodContext = createContext();

//creacion de Provider y de sus values
export const FoodContextProvider = props => {
  //recojo el estado de los  datos del json y se crea un useState, puedes recoger toda la lista del json donde quieras.
  const [allFood, setAllFood] = useState(foods);
  //recojo estado de los datos de la comida para realizar la busqueda
  const [search, setAllSearch] = useState(foods);
  //recojo el estado de los datos de las comidas y de las calorias.
  const [todayFood, setAllTodayFood] = useState([]);

  // const [caloriasFood, setAllCaloriasFood] = useState(0);

  //añadir un nuevo alimento a la lista
  const newFood = food => {
    const { name, calories, images } = food; //objetos que voy a recuperar de la prop food
    setAllFood([...allFood, { name, calories, images, quantity: 0 }]); //copia mi array de objetos(...allfood) y le añado un objeto mas a mi array de objetos con las siguientes prop(name, calories, images )
  };

  //filtro por el nombre de la lista que viene desde newfood(setAllFood)
  const searchFood = name => {
    setAllFood(
      search.filter(food =>
        food.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const todayNutrition = food => {
    const { name, calories, quantity } = food;
    setAllTodayFood([...todayFood, food]);
  };

  const addQuantityFood = (name, quantity) => {
    setAllFood(
      allFood.map(food => {
        //le devuelvo el objeto food  mas el quantity que es lo que necesitas
        return food.name == name ? { ...food, quantity } : food;
      })
    );
  };
  //borrar
  const deleteFood = foodToDelete =>
    setAllTodayFood(todayFood.filter(food => food.name !== foodToDelete));

  //para poder usar el Contexto en cualquier componente necesitamos llamar al nombre del createContext().Provider
  return (
    <FoodContext.Provider
      value={{
        allFood,
        setAllFood,
        newFood,
        searchFood,
        setAllSearch,
        todayNutrition,
        todayFood,
        addQuantityFood,
        deleteFood,
        setAllTodayFood
      }}
    >
      {props.children}
      {/* las props children se usan para cualquier propiedad a los componenentes hijos del contexto(value)  */}
    </FoodContext.Provider>
  );
};
