import React, {Component} from 'react'
export default function Today (props){
    let calories = 0;
    return (
    <>
    
    {   props.foods && 
    <ul>
        {props.foods.map(e=>{
            calories+=e.calories*e.quantity;
            return <li>
            <p>{e.quantity} {e.name}</p>
            <p>{e.calories*e.quantity} cal</p>
            </li>
        })
    }
    </ul>
    }
    <p>Total: {calories}</p>
    </>
    )
}