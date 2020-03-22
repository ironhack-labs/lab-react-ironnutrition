import React, { useContext } from "react";
import "./App.css";
import FoodBox from "./FoodBox";
import { FoodContext } from "./FoodContext";
import AddNewFood from "./AddNewFood";

const App = () => {
  const { foods } = useContext(FoodContext);

  return (
    <div className="App">
      {foods.map((food, index) => (
        <FoodBox key={index} {...{ food }} />
      ))}
      <AddNewFood />
    </div>
  );
};

export default App;
