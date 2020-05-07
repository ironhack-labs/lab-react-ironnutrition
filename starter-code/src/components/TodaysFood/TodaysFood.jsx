import React from 'react'

export default function TodaysFood(props) {
    //this is an array of food, so we need to use map
    //map in app.js ?
    //we need to do it here

    return props.foodArray.map((food, index) => (
      <div key={index}>
          <button onClick={() => props.deleteFood(food)}>Delete</button>
        <h2>
          {food.quantity} {food.name} = {food.calories} Calories
        </h2>
      </div>
    ));
}
