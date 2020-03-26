import React, { useContext } from "react";
import { FoodsContext } from "./context/Context";

import "../public/styles/App.css";

import { FoodBox } from "./components/FoodBox";
import { FormModal } from "./components/Modal";
import { TodayFoods } from "./components/TodayFoods";

export const App = () => {
  const { foods } = useContext(FoodsContext);
  const { openModal } = useContext(FoodsContext);

  return (
    <>
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-two-thirds">
            <h1 className="App-title">Iron Nutrition</h1>
          </div>
          <div className="column ">
            <button
              onClick={openModal}
              className="button is-link"
              type="submit"
            >
              Add new Food
            </button>
          </div>
        </div>
      </div>
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
