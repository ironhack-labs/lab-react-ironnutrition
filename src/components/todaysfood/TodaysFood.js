import React from "react";

export const TodaysFood = ({today}) =>{
    return(
        <div>
   <h2>Todays Food</h2>
    <ul>
        {today.map(({quantity, name, calories}) => <li key={name}>{quantity} {name} = {calories * quantity} Cal</li>)}
    </ul>
    <h3>
        Total Calories: {today.reduce((acc, food) => {return acc += (food.calories * food.quantity)}, 0)}
    </h3>
    
    </div>
    )
   
}