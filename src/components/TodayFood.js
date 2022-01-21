import React from "react";

// we can destructuring the props without using 'props'
const TodayFood = ({ foodItems, btnRemoveFood }) => {
  // const { foodItems, btnRemoveFood } = props
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
                <button 
                  className="mg button is-danger is-small is-rounded" 
                  // the only function of->btnRemoveFood is pass the 'item' to the parent
                  // and in App.js the 'handleRemoveFood' function will be triggered
                  onClick={()=> {btnRemoveFood(item)}}
                  >Delete
                </button>
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