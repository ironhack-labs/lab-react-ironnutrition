import React, { useState, createContext } from "react";
import dataFoods from "./foods.json";

export const FoodsContext = createContext();

export const FoodsContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(dataFoods);
  const [modalOpen, setModalOpen] = useState(false);

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

  return (
    <FoodsContext.Provider
      value={{
        foods,
        setFoods,
        createNewFood,
        modalOpen,
        setModalOpen,
        openModal,
        closeModal
      }}
    >
      {children}
    </FoodsContext.Provider>
  );
};
