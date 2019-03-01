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
    <div className="box">
      <div className="media-left">
        <h1 className="is-size-4">Today's Food: </h1>
        <ul>
          {plates}
        </ul>
        <p className="is-size-6">Total: <span className="has-text-weight-semibold has-text-link">{totalCal}</span> cal</p>
      </div>
    </div>
  );
}

export default Menu;
