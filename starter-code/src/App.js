import React from "react";
import { Foods } from "./Components/FoodBox";
import { AddButton } from "./Components/AddFood";
import { Search } from "./Components/SearchFood";
import { FoodContextProvider } from "./Components/context/foodContext";
export const App = () => {
  return (
    <FoodContextProvider>
      <>
        <Search />
        <AddButton />
        <Foods />
      </>
    </FoodContextProvider>
  );
};
