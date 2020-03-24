import React, { useContext } from "react";
import "./App.css";
import FoodBox from "./FoodBox";
import { FoodContext } from "./FoodContext";
import AddNewFood from "./AddNewFood";
import Search from "./Search";

const App = () => {
  const { foods, searchFoods } = useContext(FoodContext);

  return (
    <div className="App">
      <Search />
      {foods
        .filter(food => food.name.includes(searchFoods))
        .map((food, index) => (
          <FoodBox key={index} {...{ food }} />
        ))}
      <AddNewFood />
    </div>
  );
};

export default App;
