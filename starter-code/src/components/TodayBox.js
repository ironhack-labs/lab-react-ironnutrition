import React, { useContext } from "react";
import { FoodsContext } from "../context/Context";
import { TodayBox } from "../../public/styles/Today.styles";

export const TodayFood = () => {
  const { todayFoods } = useContext(FoodsContext);

  return (
    <TodayBox>
      <h3>Today's Food</h3>
      <ul>
        {todayFoods.map((food, i) => (
          <li key={i}>
            {food.quantity} {food.name} = {food.calories * food.quantity} cal
          </li>
        ))}
      </ul>
      <p>
        Total:{" "}
        <span>
          {todayFoods.reduce(
            (pre, curr) => pre + curr.calories * curr.quantity,
            0
          )}{" "}
          cal
        </span>
      </p>
    </TodayBox>
  );
};
