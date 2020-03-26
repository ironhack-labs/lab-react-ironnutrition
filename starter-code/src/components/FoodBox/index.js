import React, { useContext } from "react";

import { FoodsContext } from "../../context/Context";
import { FoodItem } from "../FoodItem/index";
import { SearchBar } from "../SearchBar/index";

export const FoodBox = ({ foodList }) => {
  //console.log("foods list --- >>>", foodList);
  const { filter } = useContext(FoodsContext);

  return (
    <>
      <SearchBar />
      <div>
        {foodList.map(
          (food, i) =>
            food.name.toLowerCase().includes(filter.toLowerCase()) && (
              <FoodItem key={i} className="box" thisFood={food} />
            )
        )}
      </div>
    </>
  );
};
