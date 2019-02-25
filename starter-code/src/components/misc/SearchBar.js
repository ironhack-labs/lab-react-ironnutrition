import React, { Component } from 'react';

const SearchBar = (props) => {

  
  return(
    <input className="input is-primary" type="text" placeholder="Text input"/>
  )
}
export default SearchBar

// PARA CREAR UNA FUNCION Y AHORRARTE EL BIND, PUEDES PONER EL NOMBRE DE LA FUNCIÓN DIRECTAMENTE

// onchange = (event) => this.setState({ search: event.target.value })