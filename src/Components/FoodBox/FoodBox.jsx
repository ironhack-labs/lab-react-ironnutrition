import React from "react"
import FoodItem from "./FoodItem"



const FoodBox = ({ foods, addItem, cuantityChanged }) => {
    return (   
      <div className="FoodBox list-group">
        {foods.map( food  => {
          return <FoodItem {...food} key={food.id} 
          addItem = {() => addItem(food)}
            cuantityChanged = {() => cuantityChanged(food)}
          />
      })}
      </div>
    )
  }
  

 export default FoodBox

