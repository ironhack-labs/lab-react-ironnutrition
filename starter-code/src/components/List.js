import React from "react";

export const List = props => {
  return (
    <li>{`${props.food.quantity} ${props.food.name} =${props.food.quantity*props.food.calories} cal`}</li>
  )}