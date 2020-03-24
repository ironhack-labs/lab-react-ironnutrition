import React, { useContext } from "react";
import "./App.css";
import FoodBox from "./FoodBox";
import { FoodContext } from "./FoodContext";
import AddNewFood from "./AddNewFood";
import Search from "./Search";
import TodaysFoods from "./TodaysFoods";

const App = () => {
  const { foods, searchFoods } = useContext(FoodContext);

  return (
    <div className="App">
      <Search />
      <div className="columns">
        <div className="column">
          {foods
            .filter(food => food.name.includes(searchFoods))
            .map((food, index) => (
              <FoodBox key={index} {...{ food }} />
            ))}
        </div>
        <div className="column">
          <TodaysFoods />
        </div>
      </div>
      <AddNewFood />
    </div>
  );
};

export default App;
