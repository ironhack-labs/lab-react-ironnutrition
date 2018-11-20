import React from "react";

const TodaysFoods = ({ data, deleteFood }) => (
  <div className="content">
    <ul>
      {data.map((food, index) => food.quantity ? <li
        index={index}
        key={index}
      > <button className="button is-small" onClick={() => deleteFood(index)}>
      <span className="icon is-medium">
        <i className="fas fa-trash"></i>
      </span>
    </button> {food.quantity} - {food.name} - {food.calories * food.quantity} cal</li> : ""
      )}
    </ul>
    <br />
    {console.log(data)}
    Total: {data.map(i => i.calories * i.quantity).reduce((a, b) => a + b)} cals
  </div>
);

export default TodaysFoods;