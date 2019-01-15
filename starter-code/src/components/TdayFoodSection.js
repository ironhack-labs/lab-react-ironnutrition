import React from "react";
import TdayFoodList from "./TdayFoodList";

export const TdayFoodSection = ({ foodList, totalCals, onDelete }) => {
  return (
    <div className="column">
      <div className="section">
        <h1 className="title">Today's Food</h1>
        {foodList.length < 1 ? (
          <article className="message">
            <div className="message-body">
              You don't have any food tracked for today, add food by selecting
              the quantity and clicking the add button.
            </div>
          </article>
        ) : (
          <TdayFoodList
            foodList={foodList}
            totalCals={totalCals}
            onDelete={idx => onDelete(idx)}
          />
        )}
      </div>
    </div>
  );
};
