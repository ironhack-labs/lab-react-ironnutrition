import React from 'react';

const Menu = (props) => {

  const foods = props.menu.map(food => (<li key={food.name}>{food.quantity} {food.name} = {food.calories * food.quantity}</li>))

  const total = props.menu.reduce((acc, food)=> { 
    acc += food.quantity*food.calories;
    return acc;
  },0)
  return(
    <div>
      <h1>Today's food</h1>
      <ul>
        {foods}
      </ul>
      <h1>Total: {total}</h1>     
      </div>
    
  );
}

export default Menu;