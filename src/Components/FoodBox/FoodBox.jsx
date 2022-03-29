import React from "react"
import FoodItem from "./FoodItem"



const FoodBox = ({ foods, addItem }) => {
    return (   
      <div className="FoodBox list-group">
        {foods.map( food  => {
          return <FoodItem {...food} key={food.id} 
          addItem={addItem}
          />
      })}
      </div>
    )
  }
  

 export default FoodBox
