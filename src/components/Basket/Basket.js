import React, { useEffect, useState } from 'react';

const Basket = ({ basket, calories }) => {
  return (
    <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {basket.map((item) => (
          <li key={item.uuid}>
            {item.quantity} {item.name} = {item.calories} cal
          </li>
        ))}
      </ul>
      <strong>Total: {calories} cal</strong>
    </div>
  );
};

export default Basket;
