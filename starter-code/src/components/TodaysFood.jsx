import React from "react";

export default function({ name, calories, quantity, totalCalorie }) {
  return (
    <React.Fragment>
      <li>
        {quantity} {name} = {quantity * calories} cal
      </li>
    </React.Fragment>
  );
}
