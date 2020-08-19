import React from 'react';

function TodaysFood(props){
    let todaysFood = props.foodList.filter((foods)=>{
        return foods.quantity > 0
    })
    let calories = todaysFood.reduce((acc,cur)=>{
        console.log(cur)
        return acc += cur.calories * cur.quantity;
    },0)
    return (
        <div>
            <h1>Today's Food</h1>
            <ul>
            {
                todaysFood.map((food,i)=>{
                    return(
                        <p key ={i}>{food.quantity} :{food.name}</p>
                    )
                })
            }
            </ul>
            <p> Total: {calories} cal</p>
        </div>
    )
}

export default TodaysFood;