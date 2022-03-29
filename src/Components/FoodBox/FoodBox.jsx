import React from "react"
import FoodItem from "./FoodItem"



const FoodBox = ({ foods, addItem, quantityChanged }) => {
    return (   
      <div className="FoodBox list-group">
        {foods.map( food  => {
          return <FoodItem {...food} key={food.id} 
          addItem = {() => addItem(food)}
          quantityChanged = {() => quantityChanged(food)}
          />
      })}
      </div>
    )
  }
  

 export default FoodBox

