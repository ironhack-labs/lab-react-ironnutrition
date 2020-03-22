import React from "react";
import ReactDOM from "react-dom";

import FoodsData from "../foods.json";
import FoodBox from "./FoodBox";

const FoodList = () => {
  //   const [food, setFood] = useState([]);

  return FoodsData.map((food, idx) => <FoodBox key={idx} {...food}></FoodBox>);
};

export default FoodList;
