import React from 'react';
import 'bulma/css/bulma.css';

const FoodList = (props) => {
  return (
    <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {props.children}
      </ul>
      <strong>Total: {props.total} cal</strong>
    </div>
  );
};

export default FoodList;