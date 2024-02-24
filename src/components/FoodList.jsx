import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import foodsJson from "../foods.json";

import { useState } from "react";
import SearchBar1 from "./SearchBar1";


function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div>
      FoodList
      <AddFoodForm foods={foods} setFoods={setFoods} />
      <SearchBar1 foods={foods} setFoods={setFoods}  />
      <FoodBox foods={foods} setFoods={setFoods} />
    </div>
  );
}

export default FoodList;
