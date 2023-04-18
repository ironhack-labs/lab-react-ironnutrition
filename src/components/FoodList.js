import { useState } from "react";
import foodJson from "../foods.json";
import FoodBox from "../components/FoodBox";
 
 
function FoodList() {
  const [food, setFood] = useState(foodJson);
 
  return (
    <div>
      <h2>Food List</h2>
      {food.map(food => {
        return <FoodBox />;
      })}
    </div>
  );
}
 
export default FoodList;