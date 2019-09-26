import React, { Component } from 'react'

const TodayList = ({ todayFoods }) => {
  return (
    <div>
      <h1 className="title">Today's List</h1>
      <ul>
        {todayFoods.map((food, ix) => {
          return <li key={ix}>{food.name}</li>
        })}
      </ul>
      <h4>
        Total Calories: {todayFoods.reduce((coll, currentFood) => coll + currentFood.calories, 0)} kcal
      </h4>
    </div>
  )
}

export default TodayList
