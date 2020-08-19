import React from 'react'
import TodayItem from './TodayItem'

export default function TodayList(props){
  return(
    <div className="column">
      <h3>Today's Food</h3>
        {props.todayList.map((food, index) =>{ return <TodayItem key={index} id={index} food={food} onDelete={props.onDelete}/>})}
      <p>Total: {props.todayList.reduce((acc, food)=> {return acc+food.quantity*food.calories}, 0)} cal</p>
      </div>
  )
}