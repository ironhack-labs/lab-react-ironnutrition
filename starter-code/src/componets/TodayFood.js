import React from 'react'


const TodayFood = ({ name, quantity,calories }) => {

    return (
        <div className="container">
          <li>{quantity} {name} = {calories} cal</li>
        </div>
    )
}

export default TodayFood