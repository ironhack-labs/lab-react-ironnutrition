import React from "react";
import { useState } from "react";

const TodaysFood = ({todaysFood}) => {
    console.log(todaysFood);

      return(
          <ul>
              {todaysFood.map(food => {
                return <li>{food.name} -> {food.calories} cal</li>
              })}
          </ul>
      )
}

export default TodaysFood;