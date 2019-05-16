import React from 'react';
import Food from "./Food";

const TodayFoods = ({totalCalories,arrtodayFoods}) => (
  <div className="colums">

    <ul>
    {
      arrtodayFoods.map((el,i) => (
       <Food
         name={el.name}
         qty={el.quantity}
         kcal={el.calories}
         key={i}
       />
      ))
    }
    </ul>
    <h3>Total: {totalCalories} cals </h3>
  </div>
);

export default TodayFoods; 