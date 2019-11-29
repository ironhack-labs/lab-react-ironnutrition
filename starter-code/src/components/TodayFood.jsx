import React from "react";

export default function TodayFood({ selectedFood, clbkDelete }) {
  console.log(selectedFood);
  return (
    <div>
      <h1>Today's foods</h1>
      <ul>
        {selectedFood.map((f, i) => (
          <li key={i}>
            {f.quantity} {f.name} = {f.calories} cal
            <button id={i} onClick={clbkDelete}  >Delete</button>
          </li>
         
        ))}
      </ul>
      <span>
        Total = {selectedFood.reduce((acc, v) => (acc += v.calories), 0)} cal
      </span>
    </div>
  );
}
