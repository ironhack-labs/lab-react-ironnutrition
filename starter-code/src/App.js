import React, { useContext } from "react";
import "./App.css";
import FoodBox from "./FoodBox";
import { FoodContext } from "./FoodContext";

const App = () => {
  const { foods } = useContext(FoodContext);

  return (
    <div className="App">
      {foods.map(food => (
        <FoodBox {...{ food }} />
      ))}
    </div>
  );
};

export default App;
