import React from 'react';

const Menu = (props) => {

  const foods = props.menu.map(food => <li style={{ listStyleType: "none" }}  key={food.name}>{food.quantity} {food.name} = {food.calories * food.quantity}</li>)

  const total = props.menu.reduce((acc, food) => {
    acc += food.quantity * food.calories;
    return acc
  }, 0)

  return (
    <div className="column content">
    <h2 className="subtitle">Today's foods</h2>
    <ul style={{ marginLeft: 0 }}>
      {foods}
    </ul>
    <strong >Total: {total} cal</strong>
    </div>
  )

}

export default Menu;


