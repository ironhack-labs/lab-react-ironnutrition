import React from "react";


const Menu = ({menu}) => {

  const menuList = menu
    .filter(food => food.quantity > 0)  
    .map(food => <li key={ food.name }>{ food.quantity } { food.name } = { food.quantity * food.calories } cal</li>)

  const sumCalories = menu.reduce((acc, food) => acc += food.calories * food.quantity, 0)

  return (
    <div className="Menu">
      <h1 className="title is-3"><u>Today's foods</u></h1>
      <ul>{menuList}</ul>
      <p className="has-margin-top-15"><strong>Total calories: {sumCalories} cal</strong></p>
    </div>
  )
};

export default Menu;