import React from "react";

export const TdayFoodBox = ({ food, index, onDelete }) => {
  return (
    <div className="box">
      <div className="columns">
        <div className="column is-four-fifths">
          <div className="columns is-mobile">
            <div className="column">{food.name}</div>
            <div className="column">{food.quantity} units</div>
            <div className="column">{food.calories} cal</div>
          </div>
        </div>
        <div className="column">
          <a className="delete" onClick={() => onDelete(index)} />
        </div>
      </div>
    </div>
  );
};
