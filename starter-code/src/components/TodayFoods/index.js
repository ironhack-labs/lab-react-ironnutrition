import React, { useContext } from "react";

import { FoodsContext } from "../../context/Context";
import { StyledList } from "./style";

export const TodayFoods = () => {
  const { todayFoods } = useContext(FoodsContext);
  const { removeFood } = useContext(FoodsContext);

  const handleRemoveFood = e => {
    console.log(e.currentTarget);
    removeFood(e.currentTarget.getAttribute("food"));
  };
  return (
    <>
      <StyledList>
        <h2 className="App-title">Today's Foods:</h2>
        <ul>
          {todayFoods.map((food, i) => (
            <li id={food.name} key={i}>
              <div>
                <b>{food.name}</b> - {food.calories} cal - {food.quantity} units
              </div>
              <button
                onClick={handleRemoveFood}
                food={food.name}
                className="button is-link"
                type="submit"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p className="total">
          <b>Total: </b>
          {todayFoods.reduce((acc, cur) => acc + cur.calories, 0)} calories
        </p>
      </StyledList>
    </>
  );
};
