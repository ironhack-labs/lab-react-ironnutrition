import React from 'react';

const List = (props) => {
  return (
    <li>{props.quantity} {props.name} = {props.calories} cal</li>
  )
};

export default List;
