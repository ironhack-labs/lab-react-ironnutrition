import React from 'react';

const Menu = ({yourMenu}) => {

  const printMenu = yourMenu.map((food,index) => <li key={index}>{food.name}{' '}{food.quantity}<a class="button is-danger">x</a></li>)
  const totalCalories = yourMenu.reduce((a, b) => ( a += (b.calories * b.quantity) ),0)

return (

  <div>
    <h1>Your menu and calories</h1>
    <ul>{printMenu}</ul>
    <h3>Total Calories : {totalCalories}</h3>
  </div>

);
}

export default Menu