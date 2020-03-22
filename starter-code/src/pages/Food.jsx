import React, { useContext, useState, useEffect } from "react";
import FoodBox from "../components/FoodBox";
import SearchBox from "../components/SearchBox";
import { FoodContext } from "../api/food.api";
import FoodContainer from "../styles/FoodContainer";
import TodayBox from "../components/TodayBox";

const Food = () => {
  const { food } = useContext(FoodContext);
  const [searchFilter, setSearchFilter] = useState("");
  const [today, setToday] = useState([]);

  console.log("TODAY", today);
  const filtered = food.filter(item => {
    return item.name.toLowerCase().indexOf(searchFilter) !== -1;
  });

  return (
    <FoodContainer>
      <div className="column">
        <SearchBox {...{ setSearchFilter, searchFilter }} />
        {filtered.map((food, i) => {
          return <FoodBox key={i} {...{ ...food, today, setToday }} />;
        })}
      </div>
      <div className="column">
        <h1>Today's Foods</h1>
        <ul>
          {today.map((item, i) => {
            console.log("FOOD IN TODAY MAP", item);
            return <TodayBox key={i} {...{ ...item, today, setToday }} />;
          })}
        </ul>
        <div>
          Total Calores ={" "}
          {today.reduce((pre, curr) => {
            console.log("PRE", pre, "CURR", curr.calories);
            return pre + curr.calories * curr.amount;
          }, 0)}
        </div>
      </div>
    </FoodContainer>
  );
};

export default Food;
