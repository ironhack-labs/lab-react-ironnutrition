import React, { Component } from 'react';

const OneFood = (props) => {
  return (
    <div>
      <p>
        {props.quantity} {props.name} = {props.calories} cal
      </p>
    </div>
  );
};

export default OneFood;
