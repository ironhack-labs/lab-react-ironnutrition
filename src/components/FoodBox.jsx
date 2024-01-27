import React from 'react'
import { useState } from 'react'
import {Card, Col, Button} from 'antd'
function FoodBox(props) {

function totalCalories(oneFood){
    const totalCalories = oneFood.calories * oneFood.servings
    return totalCalories
}
  return (
    
    <div >
   {props.food.map((oneFood)=>{
    return(
      <div key={oneFood.id} className='box' style={{border:'solid 1px', margin:'15px 0px'}}>
        <p style={{borderBottom:'solid 1px', fontSize:'18px', fontWeight:'bold', paddingBottom:'10px'}}>{oneFood.name}</p>
        <img src={oneFood.image} style={{width:`200px`}} />
        <p style={{fontSize:'18px'}}>Calories: {oneFood.calories}</p>
        <p style={{fontSize:'18px'}}>Servings <b>{oneFood.servings}</b></p>
        <p style={{fontSize:'18px'}}><b>Total Calories: {totalCalories(oneFood)}</b> kcal</p>
        <button style={{border:'grey solid 1px', backgroundColor:'#ADD8E6'}}
        onMouseOver={(e) => e.target.style.backgroundColor = '#87CEEB'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#ADD8E6'}
        onClick={()=>props.deleteFood(oneFood.id)} className='deleteButton'>Delete</button>
      </div>
    )
   })}
     </div>
  )
}

export default FoodBox;
