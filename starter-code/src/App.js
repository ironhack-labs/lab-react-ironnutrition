import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/UI/FoodBox";

const App = () => {
  return <FoodBox></FoodBox>;
};

export default App;
