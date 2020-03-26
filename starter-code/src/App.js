import React, { useContext } from "react";
import { FoodsContext } from "./context/Context";

import "../public/styles/App.css";

import { Header } from "./components/Header";
import { FoodBox } from "./components/FoodBox";
import { FormModal } from "./components/Modal";
import { TodayFoods } from "./components/TodayFoods";

export const App = () => {
  const { foods } = useContext(FoodsContext);

  return (
    <>
      <Header />
      <div className="container">
        <div className="columns ">
          <div className="column is-half">
            <FoodBox foodList={foods} />
          </div>
          <div className="column is-half">
            <TodayFoods />
          </div>
        </div>
        <FormModal />
      </div>
    </>
  );
};
