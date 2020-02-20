import React from "react";

const List = props => {
  let sumaDiego = 0;

  props.list.forEach(e => {
    sumaDiego += e.calories * e.quantity;
  });

  return (
    <div>
      <h1>Today's foods</h1>
      <ul>
        {props.list.map((e, i) => (
          <li key={i}>
            {e.quantity} {e.name} = {e.calories * e.quantity} cal
          </li>
        ))}
      </ul>
      <p>Total: {sumaDiego} cal</p>
    </div>
  );
};

export default List;
