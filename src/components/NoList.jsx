import React from 'react'
import AddFoodForm from './AddFoodForm';
import logo from '../logo.svg';

function noList() {
  return (
    <div> <h2>Oops! There's no more food to show!</h2>
    <object data={logo} style={{width: 300, height: 300}}> </object> 
    </div>
  )
}

export default noList