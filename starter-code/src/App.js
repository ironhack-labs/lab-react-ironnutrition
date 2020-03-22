import React from "react";
import "../public/styles/App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Footer from "./components/Layout";
import FoodBox from "./components/FoodBox";

export const App = () => {
  return (
    <>
      <div className="App"></div>
      <FoodBox />
      <Footer />
    </>
  );
};
