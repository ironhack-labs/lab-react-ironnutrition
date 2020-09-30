import React, { Component } from 'react'


const FoodItem = props => {

    return (
        <li>{props.quantity} {props.name} = {{props.quantity}*{props.calories}} cal</li>
        
    )
}

export default FoodItem