import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import FoodBox from "./FoodBox";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">This is Iron Nutrition</h1>
      </header>
      <FoodBox />
    </div>
  );
};

export default Home;
