import React, { useState, useEffect } from "react";

import FoodsData from "../foods.json";
import { FoodBox } from "./Foodbox";

export const FoodList = () => {
  //   const [food, setFood] = useState([]);

  return FoodsData.map((food, idx) => <FoodBox key={idx} {...food}></FoodBox>);
};
