import React from "react";
import { FoodBox } from "../components/FoodBox";
import { Search } from "../components/UI/Search";

export const Home = () => {
  return (
    <>
      <Search />
      <FoodBox />
    </>
  );
};
