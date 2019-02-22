import React from 'react';

 function TodaysFoods(props) {

    let total = 0 
    if(props.selectedFood.length > 0) {

      let caloriesArr = props.selectedFood.map(item => item.calories * item.quantity)
      total = caloriesArr.reduce((acc,curr) => acc + curr)

    }

    return  (<div>
      <br />
      <h2>Todays Foods</h2>

      {props.selectedFood.map((el, idx) => {
        return <li key={idx}>{el.quantity} {el.name}: {el.calories * el.quantity} cal 
        <button value = {el.name} onClick={(e) => props.deleteHandler(e)}>X</button></li>
      })}


      <p>Total Amount: {total} cal</p>
          
    </div>)
   
}

export default TodaysFoods