import React from 'react';
import FoodBox from '../foodbox/FoodBox.js'

export default function TodayFood(props) {
    return (
        <div>
       
        <p>{props.item.quantity} {props.item.name} = {props.item.quantity * props.item.calories} cal </p>
 
         
        </div>
    )
}

