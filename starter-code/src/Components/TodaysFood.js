import React, { Component } from 'react';

class TodayFood extends Component = () => {
 state ={
  carrito: []
  total: carrito.calories((a,c)=> {
   return a + c
  }0
  )
 }
 
 
  return (
    <div>
      <h1>Today Foods</h1>
      {carrito.map((ele) => ( 
       <li>
       {ele.name}
      </li>) )}
      <h4>Total calories{this.state.total}</h4>
    </div>
  );
};

export default TodayFood;
