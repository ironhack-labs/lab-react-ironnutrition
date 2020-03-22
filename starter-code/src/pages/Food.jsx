import React, { useContext, useState } from "react";
import FoodBox from "../components/FoodBox";
import { FoodContext } from "../api/food.api";
import FoodContainer from "../styles/FoodContainer";
import TodayBox from "../components/TodayBox";

const Food = () => {
  const { filtered } = useContext(FoodContext);
  const [today, setToday] = useState([]);

  return (
    <>
      <FoodContainer>
        <div className="column">
          {filtered.map((food, i) => {
            return <FoodBox key={i} {...{ ...food, today, setToday }} />;
          })}
        </div>
        <div className="column">
          <h1>Today's Foods</h1>
          <ul>
            {today.map((item, i) => (
              <TodayBox key={i} {...{ ...item, today, setToday }} />
            ))}
          </ul>
          <div>Total Calores = {today.reduce((pre, curr) => pre + curr.calories * curr.amount, 0)}</div>
        </div>
      </FoodContainer>
    </>
  );
};

export default Food;
