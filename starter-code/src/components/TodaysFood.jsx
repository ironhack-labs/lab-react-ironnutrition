import React from "react";

export default ({ todaysFood }) => {
  return (
    <div>
      <h2 className="is-size-3">Today's Food</h2>
      <ul>
        {todaysFood.map((food, index) => (
          <li key={index}>
            <span>{food.quantity}</span> <span>{food.name}</span> = <span>{food.quantity * food.calories} calories</span>
          </li>
        ))}
      </ul>
      <p>
        Total ={" "}
        {todaysFood.reduce((acc, el) => {
          return (acc += el.calories * Number(el.quantity));
        }, 0)}{" "}
        calories
      </p>
    </div>
  );
};
