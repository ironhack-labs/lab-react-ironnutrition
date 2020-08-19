import React from 'react'

export default function TodayItem(props){

  let stylesContainer={
    display: 'flex',
    justifyContent: 'center',
    marginBottom:'10px'
  }
  let stylesButton={
    width: '30px',
    height: '30px',
    marginLeft: '20px',
    backgroundImage: 'url(./trash.png)',
    backgroundPosition: 'center'
  }

  return(
    <div style={stylesContainer}>
      <p>{props.food.quantity} {props.food.name} - {props.food.calories*props.food.quantity} cal</p>
      <button style={stylesButton} onClick={()=>props.onDelete(props.id)}></button>
    </div>
  )
}