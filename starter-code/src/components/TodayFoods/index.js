import React, { useContext } from "react";

import { FoodsContext } from "../../context/Context";
import { StyledList } from "./style";

export const TodayFoods = () => {
  const { todayFoods } = useContext(FoodsContext);
  return (
    <>
      <StyledList>
        <h2 className="App-title">Today's Foods:</h2>
        <ul>
          {todayFoods.map((food, i) => (
            <li id={food.name} key={i}>
              <b>{food.name}</b> - {food.calories} cal - {food.quantity} units
            </li>
          ))}
        </ul>
      </StyledList>
    </>
  );
};
