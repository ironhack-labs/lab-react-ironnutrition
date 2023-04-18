import React from "react";
import foodJson from "../foods.json";

const foodArray = [...foodJson]
 
function FoodBox({ foodJson }) {
  return (
    <div className="MovieCard">
        {foodArray.map(food => {
        return (
            <div>
                <p> {food.name} </p>
                <img src={food.image} width="100px" />
            </div>
        );
      })}
    </div>
  );
}
 
export default FoodBox;