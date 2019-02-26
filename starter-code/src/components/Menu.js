import React from 'react';

const Menu = (props) => {

  const plates = props.menu.map((plate, index) => {
    console.log('plate =>', plate);
    return (
      <li key={index} className="is-size-6 has-margin-left-50-widescreen">{plate.quantity} {plate.name} = {plate.calories * plate.quantity} cal</li>
    );
  });
  
  const totalCal = props.menu.reduce((total, plate) => {
    total += plate.quantity * plate.calories;
    return total;
  },0)
  
  return (
    <div className="is-pulled-left has-padding-left-20-widescreen">
      <h1 className="is-size-4">Today's Food: </h1>
      <ul>
        {plates}
      </ul>
      <p className="is-size-6">Total: {totalCal} cal</p>
    </div>
  );
}

export default Menu;

