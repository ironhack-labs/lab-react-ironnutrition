import React from 'react';

const TodaysFoodItem = ({quantity, name, calories}) => {
  return (
    <li>{quantity} {name} - {calories} cal</li>
  );
}

export default TodaysFoodItem;