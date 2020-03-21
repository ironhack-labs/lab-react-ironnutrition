import React, { useContext } from "react";
import FoodBox from "../components/FoodBox";
import { FoodContext } from "../api/food.api";

const Food = () => {
  const { food } = useContext(FoodContext);
  return (
    <div className="column">
      {food.map((food, i) => (
        <FoodBox key={i} {...food} />
      ))}
    </div>
  );
};

export default Food;
