import React from "react";

const TodayFood = (props) => {
    const { foodItems } = props
    console.log(foodItems)

    const total = foodItems.reduce((acc, curr)=> acc + curr.calories * curr.quantity, 0)
    

    return(
      <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            {
              //foodItems.find()
              foodItems.map((item, index) => {
                return (
                  <li key={index}>
                    {item.quantity} {item.name} = {item.calories * item.quantity} cal
                  </li>
                )
              })
            }
          </ul>
          <strong>Total: {total} cal</strong>
        </div>
    )
}

export default TodayFood;
