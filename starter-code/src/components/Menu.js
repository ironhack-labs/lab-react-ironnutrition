import React from 'react';

const Menu = ({ menu, onDeleteMenu }) => {

  const deletePlate = event => {
    onDeleteMenu({
      name: menu[event.target.value].name
    })
  }


  const plates = menu.map((plate, index) => {
    return (
      <li key={index} className="is-size-6 has-margin-left-50-widescreen">{plate.quantity} {plate.name} = {plate.calories * plate.quantity} cal
        <button className="far fa-trash-alt has-margin-left-20-widescreen" value={index} onClick={deletePlate} style={{ fontSize: "15px", border: "none" }}></button>
      </li>
    );
  });
  
  const totalCal = menu.reduce((total, plate) => {
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

