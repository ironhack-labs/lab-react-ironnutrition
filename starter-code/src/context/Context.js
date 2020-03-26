import React, { useState, createContext } from "react";
import dataFoods from "./foods.json";

export const FoodsContext = createContext();

export const FoodsContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(dataFoods);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [todayFoods, setTodayFoods] = useState([]);

  const createNewFood = newFood => {
    setFoods([newFood, ...foods]);
    console.log("HEY newFood!", newFood);
  };

  const openModal = e => {
    e.preventDefault();
    console.log("open modal!");
    setModalOpen(true);
  };

  const closeModal = e => {
    e.preventDefault();
    console.log("close modal!");
    setModalOpen(false);
  };

  const addTodayFoods = newFood => {
    const index = todayFoods.findIndex(food => food.name === newFood.name);
    if (index !== -1) {
      const newTodayFoods = [...todayFoods];
      const oldFood = newTodayFoods[index];
      newTodayFoods[index] = {
        name: oldFood.name,
        quantity: oldFood.quantity + newFood.quantity,
        calories: oldFood.calories + newFood.calories
      };
      setTodayFoods(newTodayFoods);
    } else setTodayFoods([...todayFoods, newFood]);
  };

  const deleteFood = foodToDelete =>
    setTodaysFoods(todaysFoods.filter(food => food.name !== foodToDelete));

  return (
    <FoodsContext.Provider
      value={{
        foods,
        setFoods,
        createNewFood,
        modalOpen,
        setModalOpen,
        openModal,
        closeModal,
        filter,
        setFilter,
        todayFoods,
        setTodayFoods,
        addTodayFoods
      }}
    >
      {children}
    </FoodsContext.Provider>
  );
};
