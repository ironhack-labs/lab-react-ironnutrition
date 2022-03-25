import React from "react"
import FoodItem from "./FoodItem"



const FoodBox = ({ foods }) => {

    return (
        
      <div className="FoodBox list-group">
        {foods.map((food) => (
          <FoodItem {...food} key={food.id} />
        ))}
      </div>
    )
  }
  

 export default FoodBox


