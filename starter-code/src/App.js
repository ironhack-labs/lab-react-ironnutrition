import React from "react";
import { Foods } from "./Components/FoodBox";
import { AddButton } from "./Components/AddFood";
import { FoodContextProvider } from "./Components/context/foodContext";
export const App = () => {
  return (
    <FoodContextProvider>
      <>
        <AddButton />
        <Foods />
      </>
    </FoodContextProvider>
  );
};
