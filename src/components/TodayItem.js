import React from 'react'

export default function TodayItem(props){
  return(
    <p>{props.food.quantity} {props.food.name} - {props.food.calories*props.food.quantity} cal</p>
  )
}