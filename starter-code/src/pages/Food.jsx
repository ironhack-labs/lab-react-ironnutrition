import React from "react";
import food from "../../public/data/foods.json";
import FoodBox from "../components/FoodBox";

const Food = () => {
  return (
    <div class="column">
      {food.map((food, i) => (
        <FoodBox key={i} {...food} />
      ))}
      )
    </div>
  );
};

export default Food;
