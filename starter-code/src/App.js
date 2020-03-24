import React from "react";
import { Foods } from "./Components/FoodBox";
import { AddButton } from "./Components/AddFood";
export const App = () => {
  return (
    <>
      <AddButton />
      <Foods />
    </>
  );
};
