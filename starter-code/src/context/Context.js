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

  const addTodayFoods = food => {
    console.log(food);
    const newTodayFood = {
      name: food.name,
      calories: food.calories,
      quantity: food.quantity
    };

    const uniqueList = [...todayFoods].filter(e => e === food);
    console.log("que es----->", uniqueList);
    //   console.log("aqui----->", newTodayFood);
    setTodayFoods([...uniqueList, newTodayFood]);

    // console.log(`aqui ${name} ${calories} ${image}`);
    // setTodayFoods([...todayFoods, { name, calories, image, quantity }]);
    // console.log(`new today food! ${todayFoods}`);
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
